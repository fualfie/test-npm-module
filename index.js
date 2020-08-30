let test = () => { };

test.hello = () => {
    console.log('Hello World')
}

module.exports = {
    test:test,
    my: require('./my')
}