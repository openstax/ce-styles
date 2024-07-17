#!/bin/bash

if [ ! -d node_modules ]; then
  echo "Installing node dependencies ..."
  yarn install
fi
