import { Calculator } from './models/Calculator';

const { setWorldConstructor, World } = require('cucumber');

class CustomWorld extends World {
  public calculator: Calculator;

  constructor(options) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
