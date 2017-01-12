#!/bin/bash

echo "Launching node js server"

cd /home/vagrant/node

if [ ! -d node_modules ]; then
    npm cache clean
    sudo npm install
fi

echo forever -w -a -l forever.log -e err.log -o out.log --minUptime 1000 --spinSleepTime 1000 start index.js
forever -w -a -l forever.log -e err.log -o out.log --minUptime 1000 --spinSleepTime 1000 start index.js
