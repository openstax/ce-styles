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

FROM node:22
WORKDIR /code

# Install dependencies
COPY \
    package.json \
    yarn.lock \
    pubspec.* \
    ./

RUN apt-get update
RUN apt-get install shellcheck
RUN apt-get install wget

# Install a quick colorized prompt and turn on ls coloring
RUN git clone https://github.com/nojhan/liquidprompt.git ~/liquidprompt && \
    echo '[[ $- = *i* ]] && source ~/liquidprompt/liquidprompt' >>~/.bashrc && \
    mkdir -p ~/.config && \
    echo 'export LP_HOSTNAME_ALWAYS=1' >>~/.config/liquidpromptrc && \
    echo 'export LP_USER_ALWAYS=-1' >>~/.config/liquidpromptrc && \
    sed -i "/color=auto/"' s/# //' ~/.bashrc && \
    sed -i "/alias ls/,/lA/"' s/# //' ~/.bashrc


# Post-install builds the styles/output/_web-styles.json
# which is not needed for being in a docker container.
ENV SKIP_MY_POSTINSTALL=true

# Install code
COPY . ./
