'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isBpg = require('./');

function check(filename) {
	return isBpg(readChunk.sync(filename, 0, 4));
}

it('should detect BPG from Buffer', function () {
	assert(check('fixture.bpg'));
	assert(!check('fixture.jpg'));
	assert(!check('fixture.png'));
});
