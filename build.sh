#!/bin/bash

MODULE_NAME=src/shared/wasm/main
OUTPUT_JS=public/main_wasm.js

emcc ${MODULE_NAME}.c \
 -o ${OUTPUT_JS} \
 -s EXPORT_ES6=1 \
 -s 'EXPORT_NAME="$MODULE_NAME"' \
 -s 'ENVIRONMENT="web"' \
 -s 'SINGLE_FILE=1'
