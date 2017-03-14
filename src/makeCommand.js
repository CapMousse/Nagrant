'use strict';

const cli         = require('clifier');
const async       = require('async');
const fs          = require('fs');
const basePath    = process.cwd();
const makeCommand = {};

makeCommand.copyFile =  (name, file, destination, force) => {
    return (cb) => {
        if (fs.existsSync(basePath + destination) && !force) cb(name + " already exists");

        let read    = fs.createReadStream(__dirname + file);
        let write   = fs.createWriteStream(basePath + destination);

        read.on("error", (err) => {
            cb(err);
        });
        write.on("error", (err) => {
            cb(err);
        });
        write.on("done", () => {
            cb(null, name + " copied");
        });

        read.pipe(write);
    };
};

module.exports = (force, example, after) => {
    const noop = (cb) => cb(null);

    cli.warning("Initializing Nagrant");

    async.parallel([
        makeCommand.copyFile("Vagrantfile", "/stubs/Vagrantfile", "/Vagrantfile", force),
        makeCommand.copyFile("Nagrant.yml", "/stubs/Nagrant.yml", "/Nagrant.yml", force),
        example ? makeCommand.copyFile("Nagrant.yml.example", "/stubs/Nagrant.yml", "/Nagrant.yml.example", force) : noop,
        after   ? makeCommand.copyFile("after.sh", "/stubs/after.sh", "/after.sh", force) : noop
    ], (err) => {
        if (err) {
            cli.error(err);
            cli.end();
        }
    });


    cli.success("Nagrant initialized");
}