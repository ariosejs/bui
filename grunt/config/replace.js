'use strict';

var test = {
    expand:true,
    prefix: '/v<%= parseFloat(pkg.version) %>' ,
    cwd: './build/',
    src:[
        './styles/*.css'
        ,'**/*.html'
    ]
};

var online = {
    expand:true,
    prefix: 'http://p{num}.wan.sogoucdn.com/v2.4/mini',
    options:{
        num:7
    },
    cwd:'./build/',
    src:[
        './styles/*.css',
        '**/*.html'
    ]

};

module.exports = {
    test:test,
    online:online
};
