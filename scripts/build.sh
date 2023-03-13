#!/bin/bash

mkdir -p dist || exit 1
GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o dist/linux-amd64 cmd/main.go
