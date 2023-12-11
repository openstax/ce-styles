#!/bin/bash

if [ ! -d node_modules ]; then
  echo "Installing node dependencies ..."
  yarn install
fi

echo "Installing dart dependencies ..."
dart pub get

## It's common to get a network error when trying to install dart deps.
if [[ $? == 69 ]]; then
  echo "ATTENTION!!! Dart dependencies have failed to install due to a network error."
  echo "To troubleshoot, re-run 'dart pub get' in the terminal until it succeeds."
  echo "If command continues to fail, try switching to a VPN."
fi

exit 0
