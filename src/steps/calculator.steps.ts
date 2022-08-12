import { expect } from 'chai';
import { Calculator } from '../models/Calculator';

const { Given, Then, When } = require('cucumber');

Given('a calculator', function() {
  this.calculator = new Calculator();
});

When('adding {int} and {int}', function(n1: number, n2: number) {
    this.calculator.add(n1, n2);
});

Then('result should be {int}', function(n1: number) {
    expect(this.calculator.value).to.be.equal(n1);
});
