#!/bin/bash

service ssh start
# Weird docker shit
cp -R /app /copied-app
cd /copied-app
meteor build .
mup deploy
mongod --fork --syslog
cd /opt/textie
. config/env.sh
userdown app/main.js
