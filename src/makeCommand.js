'use strict';

var Clifier     = require('clifier'),
    async       = require('async'),
    fs          = require('fs'),
    basePath    = process.cwd(),
    makeCommand = {};

makeCommand.copyFile = function (name, file, destination) {
    return (cb) => {
        if (fs.existsSync(basePath + destination)) cb(name + " already exists");

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

module.exports = (example, after, end) => {
    var noop = (cb) => cb(null);

    Clifier.Stdout.Text.warning("Initializing Nagrant");

    async.parallel([
        makeCommand.copyFile("Vagrantfile", "/stubs/Vagrantfile", "/Vagrantfile"),
        makeCommand.copyFile("Nagrant.yml", "/stubs/Nagrant.yml", "/Nagrant.yml"),
        example ? makeCommand.copyFile("Nagrant.yml.example", "/stubs/Nagrant.yml", "/Nagrant.yml.example") : noop,
        after   ? makeCommand.copyFile("after.sh", "/stubs/after.sh", "/after.sh") : noop
    ], function (err) {
        if (err) {
            Clifier.Stdout.Text.error(err);
            end();
        }
    });


    Clifier.Stdout.Text.success("Nagrant initialized");
}