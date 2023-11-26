package app

import (
	"context"

	"github.com/ubuntu/gowsl"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
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
