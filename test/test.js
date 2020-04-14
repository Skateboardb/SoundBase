const request = require('supertest');
const app = require('../server.js');

describe('GET/', function() {
	it('responde with hello world', function(done) {
		//navigate to root and check that the response is "hello world"
		request(app)
			.get('/')

			.expect('hello from docker!', done);

	});
});
