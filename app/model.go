package app

type Distro struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	State string `json:"state"`
}

type CreateDistroFromImageRequest struct {
	DistroName string `json:"distroName"`
	Repository string `json:"repository"`
	Tag        string `json:"tag"`
}

type CreateDistroFromContainerRequest struct {
	DistroName  string `json:"distroName"`
	DistroPath  string `json:"distroPath"`
	ContainerID string `json:"containerId"`
}

type CreateDistroFromTarFileRequest struct {
	DistroName string `json:"distroName"`
	DistroPath string `json:"distroPath"`
	TarPath    string `json:"path"`
}

type Container struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
