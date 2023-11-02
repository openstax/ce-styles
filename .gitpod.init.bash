#!/bin/bash

DART_VERSION=2.19

yarn install

# Install old version of dart
brew tap dart-lang/dart
brew install dart@$DART_VERSION
echo "export PATH='/home/linuxbrew/.linuxbrew/opt/dart@$DART_VERSION/bin:\$PATH'" >> $HOME/.bash_profile
source $HOME/.bash_profile

# Install dart dependencies
dart pub get