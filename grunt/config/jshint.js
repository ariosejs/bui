'use strict';

var main = {
    options:{
        globals:{
            angular:true,
            require:true,
            exports:true,
            module:true,
            document:true,
            '$':true,
            location:true,
            setTimeout: true,
            setInterval: true,
            clearInterval:true,
            clearTimeout: true,
            console:true,
            gamehall:true,
            alert:true,
            window:true,
            ZeroClipboard: true,
            Pingback:true,
            Zepto:true,
            PassportSC: true,
            localStorage: true
        },
        undef:true,
        laxcomma:true,
        expr:true
    },
    src:[
        'app/*/*.js',
        'app/*/**/*.js',
        '!app/scripts/*.js',
        '!app/scripts/**/*.js',
        '!app/feedback/uploadify/*.js'
    ]
};


module.exports = {
    main:main
};
