package app

import (
	"context"
	"fmt"

	"github.com/docker/docker/client"
	"github.com/ubuntu/gowsl"
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

func (a *App) CreateDistroFromDockerImage(request CreateDistroFromImageRequest) error {
	return nil
}
