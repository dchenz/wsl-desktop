package app

import (
	"context"

	"github.com/docker/docker/client"
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
		runtime.LogErrorf(a.ctx, "Unable to create docker client: %s", err.Error())
	}
	a.docker = dockerClient
}
