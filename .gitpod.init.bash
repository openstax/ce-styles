#!/bin/bash

DART_VERSION=2.19

yarn install

# Install old version of dart
brew tap dart-lang/dart
brew install dart@$DART_VERSION
brew link dart@$DART_VERSION

# Install dart dependencies
dart pub get