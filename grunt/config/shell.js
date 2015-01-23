'use strict';

var main = {

};

var test = {
    command:"sshpass -p 'noSafeNoWork@2014' scp -r build/* root@10.12.137.181:/search/miniwan/webapp/static/mini/v2.4"
    // command:"sshpass -p 'noSafeNoWork@2014' scp -r build/* root@10.11.207.114:/search/miniwan/webapp/static/mini/v2.4"
};


module.exports = {
    main:main,
    test:test
};
