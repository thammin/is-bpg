'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	// file_magic: 0x425047fb
	return buf[0] === 66 &&
		buf[1] === 80 &&
		buf[2] === 71 &&
		buf[3] === 251;
};
