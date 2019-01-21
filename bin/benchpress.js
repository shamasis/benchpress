#!/usr/bin/env node

var args = require('miniargs').parse(process.argv),
    press = new (require('../index'))();

if (args.file && !Array.isArray(args.file)) {
    args.file = [args.file];
}

if (args.dir && !Array.isArray(args.dir)) {
    args.dir = [args.dir];
}

args.file && args.file.forEach(function (file) {
    press.addFile('./' + file);
});

press.run();
