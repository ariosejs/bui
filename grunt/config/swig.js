'use strict';



var main = {
    src: ['./build/*/*.tpl'],
    reg: /build\/(\w+)\/(\w+)\.tpl/,
    dest: './build/',
    version: '<%= parseFloat(pkg.version) %>'
};


module.exports = {
    main:main
};
