#!/bin/bash

yarn install
brew tap dart-lang/dart
brew install dart@2.19
echo 'export PATH="/home/linuxbrew/.linuxbrew/opt/dart@2.19/bin:$PATH"' >> $HOME/.bash_profile
source $HOME/.bash_profile
dart pub get