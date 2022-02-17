const helloLib = require('../src/index')

if (helloLib.hello() === 'Hello world!') {
	console.log('All Tests have passed!');
}
else {
	throw new Error('Test failed.');
}
