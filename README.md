# Nagrant
[![Stable V1.0.0](https://img.shields.io/badge/stable-v1.0.0-blue.svg)](https://www.npmjs.com/package/nagrant) 
![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## Intro
Nagrant is a completely disposable pre-package vagrant box that provide you a simple development environment to create nodejs servers without requiring your to install anything (except nodejs and vagrant). Box can be created an launched in a minutes, with a minimal configuration !

Nagrant can run on Linux, Windows and Mac and include Nodejs LTS (V6), MongoDB 3.4, MySQL and Redis. More will be added.

## How to use

You can either instal Nagrant as a global or local package.
- global : `nagrant make`
- local : `$(npm bin)/nagrant make`

## Command list : 

	make [options]	create nagrant box
		--force  	Force rewrite of Nagrant files
	 	--example	Include creation of Nagrant.yml.example file
	 	--after  	Include creation of after script
	help          	Show help for nagrant

## Requirements

Before using Nagrant, you must install Vagrant and any supported virtualization software (Virtualbox, VMWare or Parallels).

## Folders

To add any shared folders to the vagrant box, you can edit the `folders` property of the `Nagrant.yml` file.

	folders:
	  - map: ~/Directory
	    to: /home/vagrant/Directory

## Ports

This is a list of default ports fowarded to your Nagrant env:

- HTTP: 8000 → 80
- HTTPS: 44300 → 443
- MySQL: 33060 → 3306
- MongoDB: 27047 → 27017
- Redis: 63790 → 6379

**Fowarding additional pots**

	ports:
	  - from: 8080
	    to: 80
	  - from: 443
	    to: 44300
