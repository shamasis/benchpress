var fs = require('fs'),
    async = require('async'),
    Benchmark = require('benchmark'),
    BenchPress;

BenchPress = function () {
    this.files = [];
    this.tree = [];
};

BenchPress.prototype.addFile = function (file) {
    this.files.push(file);
};

BenchPress.prototype.run = function () {
    var self = this;

    this.files.forEach(function (file) {
        global.describe = function (name, spec) {
            var suite = new Benchmark.Suite(name);
            self.tree.push(suite); // keep track

            global.it = function (name, test) {
                if (!test.length) {
                    return suite.add(name, test);
                }

                suite.add(name, {
                    defer : true,
                    fn: function (deferred) {
                        test(function () {
                            deferred.resolve();
                        });
                    }
                });
            };

            spec(); // execute all benches in the spec
        };

        require(file);

        delete global.describe;
        delete global.it;
    });

    async.eachSeries(this.tree, function (suite, next) {
        suite.on('start', function (event) {
            console.log(event.currentTarget.name);
        });
        suite.on('cycle', function(event) {
            console.log('✓ ' + String(event.target));
        });

        suite.on('complete', function () {
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            console.log('');
            next();
        });

        suite.run({async: true});
    });
};

module.exports = BenchPress;
