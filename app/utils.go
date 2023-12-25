package app

import (
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) SelectFile() (string, error) {
	path, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{})
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to select a file: %s", err.Error())
		return "", err
	}
	return path, nil
}

func (a *App) SelectFolder() (string, error) {
	path, err := runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{})
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to select a folder: %s", err.Error())
		return "", err
	}
	return path, nil
}
