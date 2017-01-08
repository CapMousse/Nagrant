#!/bin/bash

debconf-set-selections <<< 'mysql-server mysql-server/root_password password nagrant'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password nagrant'
apt-get install mysql-server -y

cat > /root/.my.cnf <<< EOF
[client]
user = nagrant
password = nagrant
host = localhost
EOF

cp /root/.my.cnf /home/vagrant/.my.cnf

mysql -e "CREATE DABATASE IF NOT EXISTS 'nagrant' DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci"