package app

import "github.com/wailsapp/wails/v2/pkg/runtime"

func (a *App) IsDockerDaemonRunning() bool {
	_, err := a.docker.Ping(a.ctx)
	return err == nil
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
