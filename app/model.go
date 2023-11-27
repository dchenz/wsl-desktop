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
