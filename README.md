chai-subset
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
var testedObject = {
		a: 'b',
		c: 'd',
		e: {
			foo: 'bar',
			baz: {
				qux: 'quux'
			}
		}
	};
	
expect(testedObject).to.containSubset({
			e: {
				foo: 'bar',
				baz: {
					qux: 'quux'
				}
			}
		});
```
