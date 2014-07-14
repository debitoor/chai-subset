var chai = require('chai');
var containSubset = require("../lib/chai-subset");
global.expect = chai.expect;
containSubset.addMethods(chai);