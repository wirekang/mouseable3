#!/bin/bash

rm -rf dist
mkdir -p dist || exit 1

echo "$1"
echo "$2"
