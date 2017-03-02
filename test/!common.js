const chai = require('chai');
const chaiSubset = require('../lib/chai-subset');
global.expect = chai.expect;
chai.use(chaiSubset);