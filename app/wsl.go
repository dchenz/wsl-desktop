package app

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"os/exec"

	"github.com/ubuntu/gowsl"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) GetDistros() ([]Distro, error) {
	distros, err := gowsl.RegisteredDistros(a.ctx)
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to get linux distros: %s", err.Error())
		return nil, err
	}
	results := make([]Distro, len(distros))
	for i, distro := range distros {
		id, err := distro.GUID()
		if err != nil {
			runtime.LogErrorf(a.ctx, "Unable to get distro GUID: %s", err.Error())
			return nil, err
		}
		state, err := distro.State()
		if err != nil {
			runtime.LogErrorf(a.ctx, "Unable to get distro state: %s", err.Error())
			return nil, err
		}
		results[i] = Distro{
			ID:    id.String(),
			Name:  distro.Name(),
			State: state.String(),
		}
	}
	return results, nil
}

func (a *App) CreateDistroFromDockerImage(_ CreateDistroFromImageRequest) error {
	return nil
}

func (a *App) CreateDistroFromDockerContainer(request CreateDistroFromContainerRequest) error {
	tarFile, err := a.docker.ContainerExport(a.ctx, request.ContainerID)
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to export container: %s", err.Error())
		return err
	}
	defer tarFile.Close()
	tempFile, err := os.CreateTemp("", "dockerExport")
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to create temporary file: %s", err.Error())
		return err
	}
	if _, err := io.Copy(tempFile, tarFile); err != nil {
		runtime.LogErrorf(a.ctx, "Unable to copy bytes: %s", err.Error())
		return err
	}
	// File must be closed before WSL tries to import it.
	if err := tempFile.Close(); err != nil {
		runtime.LogErrorf(a.ctx, "Unable to close temporary file: %s", err.Error())
		return err
	}
	return a.CreateDistroFromTarFile(CreateDistroFromTarFileRequest{
		TarPath:    tempFile.Name(),
		DistroName: request.DistroName,
		DistroPath: request.DistroPath,
	})
}

func (a *App) CreateDistroFromTarFile(request CreateDistroFromTarFileRequest) error {
	// TODO: gowsl fails with an error
	distroName, _ := json.Marshal(request.DistroName)
	distroPath, _ := json.Marshal(request.DistroPath)
	tarPath, _ := json.Marshal(request.TarPath)

	wslCmd := fmt.Sprintf(`wsl.exe --import %s %s %s`,
		string(distroName), string(distroPath), string(tarPath))
	runtime.LogDebug(a.ctx, wslCmd)

	err := exec.Command("powershell", "-Command", wslCmd).Run()
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to execute command: %s", err.Error())
	}
	return err
}
