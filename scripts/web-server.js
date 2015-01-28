'use strict';

var swig = require('swig');
var express = require('express');
var path = require('path');
var less = require('less-middleware');
var browserify = require('browserify-middleware');
var fs = require('fs');

var app = express();

var appbase = path.join(__dirname , '..');

app.engine('tpl' , swig.renderFile);
app.set('view engine' , 'tpl');
app.set('views' , appbase+'/t' );
app.set('view cache', false);
swig.setDefaults({varControls:['{@','@}'] , cache: false});

app.use(less( './',{
    dest:appbase
}));

app.use( '/', express.static( path.join(appbase )));

app.get( '/', function(req,res){
    var appname = 'index';
    res.render( path.join(appname), {
        appname:appname
    });
});

app.get( /^\/(.+?)\/$/ , function(req,res){
    var appname = req.params[0];
    var tplname = 'index';
    res.render( path.join(appname , tplname) , {
        appname:appname,
        tplname: tplname
    } );
} );

app.get( /^\/(.+?)\/(.*?).html$/ , function(req,res){
    var appname = req.params[0];
    var tplname = req.params[1];
    res.render( path.join(appname , tplname) , {
        appname:appname,
        tplname: tplname
    } );
} );

app.get( /^\/(.*?)\.html$/ , function(req,res){
    var appname = req.params[0];
    res.render( path.join(appname) , {
        appname:appname
    } );
} );

app.get( /^\/r\/j\/(\w+).js/, function(req,res,next){
    browserify(path.join(appbase, 'r','j' , req.params[0]+'.js')).call(null,req,res,next);
});
app.get( /(.*)\.json$/, function(req,res){
    fs.readFile(path.join(appbase , 'mock' , req.params[0].split('/').filter(function(item){return item.length ;}).join('.') + '.json') , function(err , data){
        if( err ){

            res.send(404);
        }else{
            res.set({
                'Content-Type': 'text/html'
            });
            res.send(data);
        }
            
    });
});


var port = 9988;
app.listen(port);
console.log('Server start at port ' + port);
