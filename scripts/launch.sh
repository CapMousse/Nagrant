#!/bin/bash

echo "Launching node js server"

cd $1

if [ ! -d node_modules ]; then
    npm cache clean
    sudo npm install
fi

nodemon -L index.js > out.log 2>&1 &
