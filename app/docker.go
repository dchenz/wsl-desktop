package app

import (
	"strings"

	"github.com/docker/docker/api/types"
)

func (a *App) IsDockerDaemonRunning() bool {
	_, err := a.docker.Ping(a.ctx)
	return err == nil
}

func (a *App) GetDockerContainers() ([]Container, error) {
	containers, err := a.docker.ContainerList(a.ctx, types.ContainerListOptions{})
	if err != nil {
		return nil, err
	}
	results := make([]Container, len(containers))
	for i, container := range containers {
		results[i] = Container{
			ID:   container.ID,
			Name: strings.Join(container.Names, ","),
		}
	}
	return results, nil
}
