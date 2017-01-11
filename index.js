'use strict';

var pjson       = require('./package.json'),
    Clifier     = require('clifier'),
    cli         = new Clifier.Cli('nagrant', pjson.version, pjson.description),
    MakeCommand = require('./src/makeCommand.js');


cli.addCommand('make', 'create nagrant box', (example, after) => {
    MakeCommand(example, after, cli.end);
})
.addArgument('--example', "Include example config", false, _ => true)
.addArgument('--after', "Include after script", false, _ => true);

cli.run();
