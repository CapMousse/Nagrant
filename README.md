# Nagrant
![Stable V1.0.0](https://img.shields.io/badge/stable-v1.0.0-blue.svg) 
![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## Intro
Nagrant is a completely disposable pre-package vagrant box that provide you a simple development environment to create nodejs servers without requiring your to install anything (except nodejs and vagrant). Box can be created an launched in a minutes, with a minimal configuration !

Nagrant can run on Linux, Windows and Mac and include Nodejs LTS (V6), MongoDB 3.4, MySQL and Redis. More will be added.

## How to use

You can either instal Nagrant as a global or local package. Note that if you install Nagrant locally, you must use the local binary to launch the command.

- global : `nagrant make`
- local : `$(npm bin)/nagrant make`

Nagrant must be installed in the current project (`npm install nagrant`) to be able to launch the vagrant box (script are required to install and launch the box)

## Command list : 

	make [options]	create nagrant box
		--force  	Force rewrite of Nagrant files
	 	--example	Include creation of Nagrant.yml.example file
	 	--after  	Include creation of after script
	help          	Show help for nagrant