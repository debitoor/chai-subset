chai-subset [![npm version](https://badge.fury.io/js/chai-subset.svg)](https://badge.fury.io/js/chai-subset) [![Build Status](https://travis-ci.org/debitoor/chai-subset.svg?branch=master)](https://travis-ci.org/debitoor/chai-subset) [![devDependency Status](https://david-dm.org/debitoor/chai-subset/dev-status.svg)](https://david-dm.org/debitoor/chai-subset#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/debitoor/chai-subset/badge.svg?service=github)](https://coveralls.io/github/debitoor/chai-subset) [![NSP Status](https://nodesecurity.io/orgs/debitoor/projects/eb6fec04-2b26-4462-b4ff-08d952da3065/badge)](https://nodesecurity.io/orgs/debitoor/projects/eb6fec04-2b26-4462-b4ff-08d952da3065)
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

// or using a compare function
expect(obj).containSubset({
	a: (expectedValue) => expectedValue,
	c: (expectedValue) => expectedValue === 'd'
})

// or with 'not'
expect(obj).to.not.containSubset({
	g: 'whatever'
});
```

Also works good with arrays and `should` interface
```js
var list = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}}];

list.should.containSubset([{a:'a'}]); //Assertion error is not thrown
list.should.containSubset([{a:'a',  b: 'b'}]); //Assertion error is not thrown

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

and with `assert` interface
```js
assert.containSubset({a: 1, b: 2}, {a: 1});
```
