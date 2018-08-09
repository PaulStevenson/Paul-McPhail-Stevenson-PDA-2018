var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
})

  it('can add numbers test', function () {
       calculator.previousTotal = 3;
      calculator.add(3);
      
      assert.equal(calculator.runningTotal, 6 )
  })

  it('can subract numbers test', function () {
       calculator.previousTotal = 5;
      calculator.subtract(4);

      assert.equal(calculator.runningTotal,  1)
  })

  it('can multiply numbers test', function () {
       calculator.previousTotal = 5;
      calculator.multiply(4);

      assert.equal(calculator.runningTotal,  20)
  })

  it('can divide numbers test', function () {
       calculator.previousTotal = 20;
      calculator.divide(4);

      assert.equal(calculator.runningTotal,  5)
  })

  // - calculator.numberClick()
  it("can click a number", function () {
      calculator.numberClick(5);
      calculator.numberClick(5);

      assert.equal(calculator.runningTotal, 55)
  })

  // - calculator.operatorClick()
  it('can do operator click', function () {
      calculator.runningTotal = 5;
      calculator.previousTotal = 5;
      calculator.operatorClick('+');
      calculator.operatorClick('=');

      assert.equal(calculator.runningTotal, 10)

  })

  // - calculator.clearClick()
  it('can clear the calculator', function () {
      calculator.previousTotal = 3;
     calculator.add(3);
     calculator.clearClick()

     assert.equal(calculator.runningTotal, 0)
  })

});
