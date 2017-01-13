'use strict';

var Clifier     = require('clifier'),
    async       = require('async'),
    fs          = require('fs'),
    basePath    = process.cwd(),
    makeCommand = {};

makeCommand.copyFile = function (name, file, destination, force) {
    return (cb) => {
        if (fs.existsSync(basePath + destination) && !force) cb(name + " already exists");

        var read    = fs.createReadStream(__dirname + file),
            write   = fs.createWriteStream(basePath + destination);

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

module.exports = function (force, example, after, end) {
    var noop = (cb) => cb(null);

    if (!fs.existsSync(basePath + '/node_modules/nagrant')) {
        Clifier.Stdout.Text.error("Nagrant is not installed for current project");
        return;
    }

    Clifier.Stdout.Text.warning("Initializing Nagrant");

    async.parallel([
        makeCommand.copyFile("Vagrantfile", "/stubs/Vagrantfile", "/Vagrantfile", force),
        makeCommand.copyFile("Nagrant.yml", "/stubs/Nagrant.yml", "/Nagrant.yml", force),
        example ? makeCommand.copyFile("Nagrant.yml.example", "/stubs/Nagrant.yml", "/Nagrant.yml.example", force) : noop,
        after   ? makeCommand.copyFile("after.sh", "/stubs/after.sh", "/after.sh", force) : noop
    ], function (err) {
        if (err) {
            Clifier.Stdout.Text.error(err);
        }
    });


    Clifier.Stdout.Text.success("Nagrant initialized");
}