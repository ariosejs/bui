'use strict';

var log = require('./lib/log');
var path = require('path');
var fs = require('fs');

function main(){
    var args = process.argv.slice(2);
    
    if(!args.length){
        log.error('Please specify app name.Exit.');
        process.exit(1);
    }

    var appname = args.shift();
    
    var apppath = path.join( process.cwd() , 't' , appname );

    if( fs.existsSync(apppath) &&  fs.statSync( apppath ).isDirectory() ){
        log.error('App '+ appname + ' exists.Exit.');
        process.exit(1);
    }

    fs.mkdirSync(apppath);
    fs.writeFileSync( path.join(apppath, 'index.tpl') ,
                      '{% extends "../parent.tpl" %}\n{% block styles %}\n{% parent %}\n{% endblock %}\n{% block content %}\n\n'
                      +'{% endblock %}\n{% block scripts %}\n{% parent %}\n{% endblock %}' );
    fs.writeFileSync( path.join(apppath ,'..','..','r','j', appname+'.js'),'/* @license */' );
    fs.writeFileSync( path.join(apppath , '..','..','r' , appname+'.css') , '@import url(global.css);\n' );

    log.success('All done.Enjoy your app.');
}




main();
