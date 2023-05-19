[![REUSE status](https://api.reuse.software/badge/github.com/signavio/chai-subset)](https://api.reuse.software/info/github.com/signavio/chai-subset)

chai-subset [![npm version](https://img.shields.io/npm/v/chai-subset.svg)](https://www.npmjs.com/package/chai-subset) [![Build Status](https://travis-ci.org/debitoor/chai-subset.svg?branch=master)](https://travis-ci.org/debitoor/chai-subset) [![devDependency Status](https://david-dm.org/debitoor/chai-subset/dev-status.svg)](https://david-dm.org/debitoor/chai-subset#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/debitoor/chai-subset/badge.svg?service=github)](https://coveralls.io/github/debitoor/chai-subset)
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

in your spec.js
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
	a: 'b',
	e: {
		baz: {
			qux: 'quux'
		}
	}
});
//or with 'not'
expect(obj).to.not.containSubset({
	g: 'whatever'
});
```

Also works good with arrays and `should` interface
```js
var list = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}}];

list.should.containSubset([{a:'a'}]); //Assertion error is not thrown
list.should.containSubset([{a:'a',  b: 'b'}}]); //Assertion error is not thrown

list.should.containSubset([{a:'a', b: 'bd'}]); 
/*throws
AssertionError: expected
[
    {
        "a": "a",
        "b": "b"
    },
    {
        "v": "f",
        "d": {
            "z": "g"
        }
    }
]
to contain subset 
[ { a: 'a', b: 'bd' } ]
*/
```

