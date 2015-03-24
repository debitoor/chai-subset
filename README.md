chai-subset [![npm version](https://img.shields.io/npm/v/chai-subset.svg)](https://www.npmjs.com/package/chai-subset) [![Build Status](https://travis-ci.org/e-conomic/chai-subset.svg?branch=master)](https://travis-ci.org/e-conomic/chai-subset) [![devDependency Status](https://david-dm.org/e-conomic/chai-subset/dev-status.svg)](https://david-dm.org/e-conomic/chai-subset#info=devDependencies)
===========

"containSubset" object properties matcher for [Chai](http://chaijs.com/) assertion library

Installation
===========

`npm install --save-dev chai-subset`

Usage
=====

common.js
```js
var chai = require('chai');
var chaiSubset = require('chai-subset');
chai.use(chaiSubset);
```

spec.js
```js
var obj = {
	a: 'b',
	c: 'd',
	e: {
		foo: 'bar',
		baz: {
			qux: 'quux'
		}
	}
};
	
expect(obj).to.containSubset({
	e: {
		foo: 'bar',
		baz: {
			qux: 'quux'
		}
	}
});
```
