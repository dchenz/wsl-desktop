package app

import (
	"bytes"
	"os/exec"

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

func (a *App) runCommand(command string) error {
	cmd := exec.Command("powershell", "-Command", command)
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	runtime.LogDebug(a.ctx, command)
	err := cmd.Run()
	if err != nil {
		runtime.LogErrorf(a.ctx, "Unable to execute command: %s", err.Error())
		if contents := stdout.String(); contents != "" {
			runtime.LogErrorf(a.ctx, "stdout\n%s\n", contents)
		}
		if contents := stderr.String(); contents != "" {
			runtime.LogErrorf(a.ctx, "stderr\n%s\n", contents)
		}
	}
	return err
}
