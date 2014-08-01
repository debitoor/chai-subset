var chai = require('chai');
var chaiSubset = require("../lib/chai-subset");
global.expect = chai.expect;
chai.use(chaiSubset);