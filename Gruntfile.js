'use strict';

var browserifyTask = require('./grunt/task/browserify');
var swigTask = require('./grunt/task/swig');
var inlineTemplateTask = require('./grunt/task/inline-template');
var angularLintTask = require('./grunt/task/angular-lint');
var replaceTask = require('./grunt/task/replace');

module.exports = function(grunt){



    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),
        "browserify": require('./grunt/config/browserify'),
        "swig": require('./grunt/config/swig'),
        "copy": require('./grunt/config/copy'),
        "cssmin": require('./grunt/config/cssmin'),
        "uglify": require('./grunt/config/uglify'),
        "clean": require('./grunt/config/clean'),
        "shell": require('./grunt/config/shell'),
        "inline-template": require('./grunt/config/inline-template'),
        "angular-lint": require('./grunt/config/angular-lint'),
        "replace": require('./grunt/config/replace'),
        "jshint": require('./grunt/config/jshint')
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('delete-build', function() {
        if (grunt.file.exists('build')) {
            grunt.file.delete('build');
        }
    });

    grunt.registerTask('mk-build', function() {
        if (!grunt.file.exists('build')) {
            grunt.file.mkdir('build');
        }
    });



    grunt.registerMultiTask('browserify', browserifyTask);
    grunt.registerMultiTask('swig', swigTask);
    grunt.registerMultiTask('inline-template', inlineTemplateTask);
    grunt.registerMultiTask('replace', replaceTask);

    grunt.registerTask('base' , ['delete-build', 'mk-build', 'copy' , 'jshint']);


    grunt.registerTask('debug' , ['base' , 'browserify:debug' , 'swig' , 'inline-template' , 'clean' ]);
    grunt.registerTask('test' , ['debug',  'replace:test' , 'shell:test']);

    grunt.registerTask('online' , ['base' , 'browserify:online' , 'cssmin' , 'uglify' , 'swig' , 'inline-template' , 'clean' ,'replace:online']);


    


};
