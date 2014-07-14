chai-subset [![Build Status](https://travis-ci.org/e-conomic/chai-subset.svg?branch=master)](https://travis-ci.org/e-conomic/chai-subset)
===========

"containSubset" object properties matcher for Chai


Usage
=====

common.js
```js
var containSubset = require("../lib/chai-subset");
global.expect = chai.expect; //optional
containSubset.addMethods(chai);
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
