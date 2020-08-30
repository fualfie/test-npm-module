let test = () => { };

test.hello = () => {
    console.log('Hello World')
}

const uniqueString = require('unique-string');

exports = module.exports = {};
exports.test = test
exports.my = require('./my')
exports.random = ()=> uniqueString()
