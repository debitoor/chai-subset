chai-subset
===========

> [!IMPORTANT]
> **Deprecated!** This lib and repository is deprecated, as the functionality is not included in chai itself. See more [here](https://github.com/chaijs/chai/issues/1616#issuecomment-2111847895).

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
