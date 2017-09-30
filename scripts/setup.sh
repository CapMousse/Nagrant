#!/bin/bash

echo "Provisioning virtual machine..."

if [ $(dpkg-query -W -f='${Status}' nodejs 2>/dev/null | grep -c "ok installed") -eq 0 ]
then
    bash <(curl -s https://deb.nodesource.com/setup_8.x)
    apt-get upgrade -y
    apt-get install -y build-essential graphicsmagick libstdc++6 nodejs
    npm update -g npm
    npm install -g nodemon forever
fi
