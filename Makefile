YARN_CMD=yarn --cwd frontend
EXTRA_ARGS=

build:
	wails build -clean -platform windows/amd64 ${EXTRA_ARGS}
	${YARN_CMD} format:wailsjs

lint:
	golangci-lint run
	${YARN_CMD} lint

format:
	go fmt ./...
	${YARN_CMD} format

.PHONY: build
