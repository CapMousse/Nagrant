#!/bin/bash

echo "Provisioning virtual machine..."

if [ $(dpkg-query -W -f='${Status}' nodejs 2>/dev/null | grep -c "ok installed") -eq 0 ]
then
    bash <(curl -s https://deb.nodesource.com/setup_6.x)
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

    apt-get update
    apt-get upgrade -y
    apt-get install -y build-essential graphicsmagick nodejs mongodb-org
    npm install -g forever
fi
