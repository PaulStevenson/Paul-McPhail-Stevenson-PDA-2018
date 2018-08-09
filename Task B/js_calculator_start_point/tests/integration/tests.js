var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to add two single digit numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('should be able to add two double digit numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('44')
  })

  it('should be able to subract two single digit numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number4')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to multiply two single digit numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })

  it('should be able to divide two single digit numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to chain a caluculation', function () {
      element(by.css('#number4')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number7')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('21')
  })

  it('should be able to show total as a decimal', function () {
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();

      expect(running_total.getAttribute('value')).to.eventually.equal('0.1')
  })

  it('should be able to show total as a negative', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-4')
  })

  it('should be able to divide by 0', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })



});
