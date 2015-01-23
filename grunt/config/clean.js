'use strict';

var main = {
    expand:true,
    cwd: './build/',
    src:[
        'common' 
        , 'mock'
        , 'scripts/lib'
        ,'*/*.tpl'
        ,'!common/parent.tpl'
        ,'*/*.js'
        ,'!scripts/*.js'
        ,'*/controllers/'
    ]
};


module.exports = {
    main:main
};
