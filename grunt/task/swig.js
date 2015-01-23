'use strict';

var swig = require('swig');
var grunt = require('grunt');
var path = require('path');

var fs = require('fs');

module.exports = function(){
    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand(config.src);

    swig.setDefaults({varControls:['{@','@}'] , cache: false});

    var currentDone = 0 , totalDone = files.length;
    function addDone(){
        currentDone++;
        if(currentDone == totalDone){
            done();
        }
    }
    
    files.forEach(function(file){
        grunt.log.writeln('Render template for ' + file);
        var appname = file.match(config.reg)[1];
        var tplname = file.match(config.reg)[2];

        swig.renderFile(path.join(process.cwd(),file), {
            appname: appname,
            version: config.version
        } , function(err , output){
            if( err ){
                grunt.log.error(err);
                addDone();
            }
            grunt.file.write( path.join( config.dest , appname ,tplname+'.html' ), output );

            addDone();
        });

    });
};


