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

## Options

- `--force` : force rewriting of Nagrant files
- `--example` : create a `Nagrant.yml.example` file
- `--after` : create a `after.sh` file, executed after Nagrant provision