#!/bin/bash

echo 'root:toor' | chpasswd
sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
service ssh start
ln -s /usr/bin/nodejs /usr/bin/node
# Weird docker shit
cp -R /app /copied-app
cd /copied-app
meteor build .
mup deploy
