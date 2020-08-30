let test = () => { };

test.hello = () => {
    console.log('Hello World')
}

exports = module.exports = {};
exports.test = test
exports.my = require('./my')
