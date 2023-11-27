package app

import (
	"encoding/json"
	"fmt"
	"os/exec"

	"github.com/ubuntu/gowsl"
)

func (a *App) GetDistros() ([]Distro, error) {
	distros, err := gowsl.RegisteredDistros(a.ctx)
	if err != nil {
		return nil, err
	}
	results := make([]Distro, len(distros))
	for i, distro := range distros {
		id, err := distro.GUID()
		if err != nil {
			return nil, err
		}
		state, err := distro.State()
		if err != nil {
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

func (a *App) CreateDistroFromTarFile(request CreateDistroFromTarFileRequest) error {
	// TODO: gowsl fails with an error
	distroName, _ := json.Marshal(request.DistroName)
	distroPath, _ := json.Marshal(request.DistroPath)
	tarPath, _ := json.Marshal(request.TarPath)
	wslCmd := fmt.Sprintf(`wsl.exe --import %s %s %s`,
		string(distroName), string(distroPath), string(tarPath))
	cmd := exec.Command("powershell", "-Command", wslCmd)
	err := cmd.Run()
	if err != nil {
		fmt.Println(err)
	}
	return err
}
