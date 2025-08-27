(function() {
	(function(chaiSubset) {
		if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
			return module.exports = chaiSubset;
		} else if (typeof define === 'function' && define.amd) {
			return define(function() {
				return chaiSubset;
			});
		} else {
			return chai.use(chaiSubset);
		}
	})(function(chai, utils) {
		var Assertion = chai.Assertion;
		var assertionPrototype = Assertion.prototype;

		Assertion.addMethod('containSubset', function (expected) {
			var actual = utils.flag(this, 'object');
			var showDiff = chai.config.showDiff;

			try{
				compare(expected, actual, '/');
				assertionPrototype.assert.call(this,
					true,
					undefined,
					'expected #{act} to not contain subset #{exp}',
					expected,
					actual,
					showDiff
				);
			} catch(msg) {
				assertionPrototype.assert.call(this,
					false,
					msg,
					undefined,
					expected,
					actual,
					showDiff
				);
			}

		});

		chai.assert.containSubset = function(val, exp, msg) {
			new chai.Assertion(val, msg).to.be.containSubset(exp);
		};

		function compare(expected, actual, path) {
			if (expected === actual) {
				return true;
			}
			if (typeof(actual) !== typeof(expected)) {
				throw 'Expected to have type "' + typeof(expected) + '" but got "' + typeof(actual) +'" at path "'+ path +'".';
			}
			if (typeof(expected) !== 'object' || expected === null) {
				if(expected === actual) {return true;}
				else {throw 'Expected to have value "' + expected + '" but got "' + actual +'" at path "'+ path +'".';}
			}
			if (!!expected && !actual) {
				throw 'Expected to have boolean "' + expected + '" but got "' + actual +'" at path "'+ path +'".';
			}

			if (Array.isArray(expected)) {
				if (typeof(actual.length) !== 'number') {
					throw 'Expected to have Array with "length" of type "number" but got "' + typeof(actual.length) + '" at path "'+ path +'".';
				}
				var aa = Array.prototype.slice.call(actual);
				var lastIndex = -1;
				var everyInArray = expected.every(function (exp, index) {
					lastIndex = index;
					return aa.some(function (act) {
						try{
							compare(exp, act, path + (path === '/' ? '' : '/') + index);
						} catch(msg) {
							return false;
						}
						return true;
					});
				});
				if(everyInArray){
					return true;
				} else {
					throw 'Expected to find every entry in Array in path "' + path + '" but at least entry in index "' + lastIndex +'" was not found.';
				}
			}

			if (expected instanceof Date) {
				if (actual instanceof Date) {
					if(expected.getTime() === actual.getTime()) {return true;}
					else {throw 'Expected to have date "' + expected.toISOString() + '" but got ' + '"' + actual.toISOString() + '" at path "' + path + '".';}
				} else {
					throw 'Expected to have date "' + expected.toISOString() + '" but got ' + '"' + actual + '" at path "' + path + '".';
				}
			}

			var lastKey = '';
			var everyInObject = Object.keys(expected).every(function (key) {
				lastKey = key;
				var eo = expected[key];
				var ao = actual[key];
				if (typeof(eo) === 'object' && eo !== null && ao !== null) {
					//If no Exception was thrown, this should always return true
					return compare(eo, ao, path + (path === '/' ? '' : '/') + key);
				}
				if (typeof(eo) === 'function') {
					var result = eo(ao);
					if(result) {return true;}
					else {throw 'Expected to have truly result of function "' + eo.name + '" but got ' + '"' + result + '" at path "' + (path === '/' ? '' : '/') + key + '".';}
				}
				if(ao === eo) {return true;}
				else {throw 'Expected to have "' + eo + '" but got "' + ao +'" at path "'+ (path === '/' ? '' : '/') + key +'".';}
			});
			if (everyInObject) {return true;}
			//Well, this should never happen. the every-loop should return always true or throw an exception otherwise
			else {throw 'Expected to find every entry in Object in path "' + path + '" but at least entry with key "' + lastKey +'" was not found.';}
		}
	});

}).call(this);

