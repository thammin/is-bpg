# is-bpg 

> Check if a Buffer/Uint8Array is a [BPG](https://en.wikipedia.org/wiki/Better_Portable_Graphics) image


## Install

```sh
$ npm install --save is-bpg
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isBpg = require('is-bpg');
var buffer = readChunk.sync('unicorn.bpg', 0, 4);

isBpg(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.bpg');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isBpg(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isBpg(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 4 bytes.


## License

MIT
