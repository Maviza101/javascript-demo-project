// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    assert(myApp.computeAverage(1,2,3) == 2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    assert(myApp.computeAverage(3, 7, 5) == 5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
  it("should return 1 as factorial for 0", function() {
    assert(myApp.computeFactorial(0) == 1);
  })
  it("should return 1 as factorial for 1", function() {
    assert(myApp.computeFactorial(1) == 1);
  })
  it("should return an error message for -3", function() {
    assert(myApp.computeFactorial(-3) == "Cannot find factorial of negative number")
  })
})

describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    assert(myApp.convertTempCtoF(40) == 104);
  })
  it("should return 140 for Celcius value 60", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })
})

// Tests using expect.
describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect(myApp.computeAverage(1, 2, 3)).to.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.computeAverage(3, 7, 5)).to.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    expect(myApp.computeFactorial(5)).to.equal(120);
  })
  it("should return 1 as factorial for 0", function() {
    expect(myApp.computeFactorial(0)).to.equal(1);
  })
  it("should return 1 as factorial for 1", function() {
    expect(myApp.computeFactorial(1)).to.equal(1);
  })
  it("should return an error message for -3", function() {
    expect(myApp.computeFactorial(-3)).to.equal("Cannot find factorial of negative number");
  })
})

describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    expect(myApp.convertTempCtoF(40)).to.equal(104);
  })
  it("should return 140 for Celcius value 60", function() {
    expect(myApp.convertTempCtoF(60)).to.equal(140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    expect(myApp.convertTempFtoC(140)).to.equal(60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    expect(myApp.convertTempFtoC(104)).to.equal(40);
  })
})

// Tests using should.
// Note that we're using chai.should(), NOT chai.should
var should = chai.should();
describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    myApp.computeAverage(1, 2, 3).should.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    myApp.computeAverage(3, 7, 5).should.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    myApp.computeFactorial(5).should.equal(120);
  })
  it("should return 1 as factorial for 0", function() {
    myApp.computeFactorial(0).should.equal(1);
  })
  it("should return 1 as factorial for 1", function() {
    myApp.computeFactorial(1).should.equal(1);
  })
  it("should return an error message for -3", function() {
    myApp.computeFactorial(-3).should.equal("Cannot find factorial of negative number");
  })
})

describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    myApp.convertTempCtoF(40).should.equal(104);
  })
  it("should return 140 for Celcius value 60", function() {
    myApp.convertTempCtoF(60).should.equal(140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    myApp.convertTempFtoC(140).should.equal(60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    myApp.convertTempFtoC(104).should.equal(40);
  })
})
