/**
 * Decorators are used to write code that will be easier to use by other developers
 * Decorators are all about classes
 * Decorator is a function applied to something: a class
 * Decorators execute when the calss is defined not when instantiated
 */
const Logger = (constructor: Function) => {
  console.log('Logging...');
  console.log(constructor);
};

@Logger
class Person {
  name = 'Felix';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
