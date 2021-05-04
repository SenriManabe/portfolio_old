#!/bin/sh

cd $(dirname $0)
sass --watch --no-cache --sourcemap=none sass:css --style compressed