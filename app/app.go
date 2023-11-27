package app

import (
	"context"
	"encoding/json"
	"fmt"
	"os/exec"

	"github.com/docker/docker/client"
	"github.com/ubuntu/gowsl"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx    context.Context
	docker client.APIClient
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// Startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	dockerClient, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		fmt.Println(err)
	}
	a.docker = dockerClient
}

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

func (a *App) IsDockerDaemonRunning() bool {
	_, err := a.docker.Ping(a.ctx)
	return err == nil
}

func (a *App) CreateDistroFromDockerImage(_ CreateDistroFromImageRequest) error {
	return nil
}

func (a *App) SelectFile() (string, error) {
	path, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{})
	if err != nil {
		return "", err
	}
	return path, nil
}

func (a *App) SelectFolder() (string, error) {
	path, err := runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{})
	if err != nil {
		return "", err
	}
	return path, nil
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
