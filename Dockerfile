##
## Create an image that can be used to play with
## ce-styles commands.
##
## To create the image:
##    docker build -t openstax/ce-styles:latest .
##
## To start the container:
##    docker run --mount type=bind,source=$(pwd),target=/code -it openstax/ce-styles:latest /bin/bash
## where the ce-styles repo has been cloned into the
## current working directory.
##
## To run the code:
##    ./scripts/test
## See:
##    https://github.com/openstax/ce-styles
## for details.
##

#############################################################################################################

FROM dart:2.19.0 AS build
WORKDIR /code

# Install dependencies
COPY \
    package.json \
    yarn.lock \
    pubspec.* \
    ./

RUN dart pub get

RUN apt-get update
RUN apt-get install shellcheck

# Install node
# https://stackoverflow.com/questions/36399848/install-node-in-dockerfile/57546198#57546198
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=14.16.1
RUN . "$NVM_DIR/nvm.sh" && nvm install $NODE_VERSION && \
    . "$NVM_DIR/nvm.sh" && nvm use v$NODE_VERSION && \
    . "$NVM_DIR/nvm.sh" && nvm alias default v$NODE_VERSION
ENV PATH="/root/.nvm/versions/node/v$NODE_VERSION/bin/:${PATH}"

# Install yarn
#
# When you run npm as root (this is the default user in Docker build) and
# install a global package, for security reasons, npm installs and executes
# binaries as user nobody, who doesn't have any permissions. This is for
# security reasons.
#
# Get around this by adding the --unsafe-perm flag
RUN npm install --global --unsafe-perm yarn

# Post-install builds the styles/output/_web-styles.json
# which is not needed for being in a docker container.
ENV SKIP_MY_POSTINSTALL=true

# Install code
COPY . ./
