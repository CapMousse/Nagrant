#!/bin/bash

echo "Launching node js server"

cd /home/vagrant/node

if [ ! -d node_modules ]; then
    npm cache clean
    sudo npm install
fi

PORT=8080 MONGODB=mongodb://localhost/hitbox forever start index.js -w -l forever.log
