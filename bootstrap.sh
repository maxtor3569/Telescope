#!/bin/bash

apt-get update
apt-get install -yf nginx npm ssh curl
npm install -g mup
curl https://install.meteor.com/ | sh
echo 'root:toor' | chpasswd
sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
service ssh start
ln -s /usr/bin/nodejs /usr/bin/node
cd /app
mup setup
