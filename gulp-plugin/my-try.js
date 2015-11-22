// PLUGIN_NAME: sample
var through = require('through2');
var count = 0;
function sample() {
    return through.obj(function (chrunk, enc, cb) {
        console.log('sample----1', chrunk);
        console.log('sample----2', enc);
        console.log('sample----3', cb);
        //this.push('hello I am sample-------');
        //this.push('hello I am sample-------xx');
        if (count++ > 4) {
            this.push('count > 4')
        }
        cb();
    });
}
function sample2() {
    return through.obj(function (chrunk, enc, cb) {
        console.log('sample2++--1', chrunk);
        console.log('sample2++--2', enc);
        console.log('sample2++--3', cb);
        this.push(chrunk);
        cb();
    });
}
module.exports.sample = sample;
module.exports.sample2 = sample2;