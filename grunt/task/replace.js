'use strict';

var grunt = require('grunt');
var path = require('path');
var fs = require('fs');

var md5 = require('MD5');


var regs = [
        /<script.*? src=['"](.+?)['"].*?\/?>/ig
    ,/<link.*? href=['"](.+?)['"].*\/>/ig
    ,/url\(['"]?(.+?)['"]?\)/ig
];

var md5toint = function(md5){
    var md5arr = [md5.slice(0,16),md5.slice(16)];
    var result = '';
    md5arr.forEach(function(item){
        var num = (parseInt(item,16) % 997).toString();
        while(num.length < 3){
            num  = '0' + num;
        }
        result += num;
    });
    return result;
};

module.exports= function(){

    var config = this.data;
    //var done = this.async();

    
    var files = this.files;
    var success = 0;
    files.forEach(function(file){
        var fpath = path.join( process.cwd() , file.src[0]);
        var data = fs.readFileSync( fpath) ; //extremely strange. Can't use async methods
        data = data.toString();
        regs.forEach(function(reg){
            var result;
            while( (result = reg.exec(data)) != null ) {
                var filefrag = result[0];

                var sourcefile = path.join(process.cwd() , 'build'  , result[1]);
                
                if( !fs.existsSync(sourcefile) ){//css img.TODO
                    //sourcefile =
                }

                if( fs.existsSync(sourcefile) ){
                    
                    grunt.log.writeln('Replace file ' + result[1] + ' md5 in '+ file.src[0] +'.');
                    var timestamp = md5toint(md5(fs.readFileSync(sourcefile)));

                    var cdnnum = 0;
                    if(config.options && config.options.num){
                        cdnnum = +timestamp.toString().slice(0,1);
                        if( cdnnum > config.options.num ){
                            cdnnum = cdnnum -7;
                        }
                    }

                    data = data.replace( 
                        filefrag
                        , filefrag.replace( 
                            result[1]  
                            , ( (config.prefix && config.prefix.replace('{num}' , cdnnum ) ) || '' ) + result[1] + '?t=' + timestamp
                        ) );

                }
            }
        });
        fs.writeFileSync(fpath ,  data);

    });


};

