YARN_CMD=yarn --cwd frontend

build:
	wails build -clean -platform windows/amd64

lint:
	golangci-lint run
	${YARN_CMD} lint

format:
	go fmt ./...
	${YARN_CMD} format
