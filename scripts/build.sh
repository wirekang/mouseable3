#!/bin/bash

rm -rf dist
mkdir -p dist || exit 1
cd dist || exit 1

export VERSION="$1"
export BRANCH="$2"
cmake .. || exit 1
make || exit 1
