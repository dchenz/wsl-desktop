package app

import (
	"strings"

	"github.com/docker/docker/api/types"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) IsDockerDaemonRunning() bool {
	_, err := a.docker.Ping(a.ctx)
	if err != nil {
		runtime.LogDebug(a.ctx, err.Error())
	}
	return err == nil
}

func (a *App) GetDockerContainers() ([]Container, error) {
	containers, err := a.docker.ContainerList(a.ctx, types.ContainerListOptions{})
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to get docker containers: %s", err.Error())
		return nil, err
	}
	results := make([]Container, len(containers))
	for i, container := range containers {
		results[i] = Container{
			ID:    container.ID,
			Name:  strings.Join(container.Names, ","),
			Image: container.Image,
		}
	}
	return results, nil
}
