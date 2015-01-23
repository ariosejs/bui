'use strict';

var grunt = require('grunt');
var path = require('path');
var fs = require('fs');


var imgreg = /<img.*? src=['"]?\{\{(.+?)\}\}['"]?.*?\/?>/g;

module.exports= function(){

    var config = this.data;
    var done = this.async();

    var files = grunt.file.expand(config.src);

    
    var success = 0,flag=true;
    files.forEach(function(file){
        
        fs.readFile(file,function(err,content){
            content = content.toString().split('\n');
            content.forEach(function(line , idx){
                var result;
                while( (result=imgreg.exec(line)) !=null ){
                    flag = false;
                    grunt.log.errorlns('Using src={{var}} in template at line ' + (idx+1) + ' pos ' + result.index + ' in file '+ file +'.');
                    
                }
            });
            if( ++success == files.length ){console.log(flag)
                !flag && grunt.warn('Angular lint has some problem.');
                done();
            }
        });
    });
};
