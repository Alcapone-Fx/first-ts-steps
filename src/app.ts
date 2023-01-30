/**
 * Decorators are used to write code that will be easier to use by other developers
 * Decorators are all about classes
 * Decorator is a function applied to something: a class
 * Decorators execute when the class is defined not when instantiated
 */
/**
 * We can define a decorator factory, which returns a decorator function,
 * but allow us to configure it when we assign it as a decorator to something
 */
/**
 * Decorators are functions that are executed when the class is defined to add extra functionality
 */
const Logger = (log: string) => (constructor: Function) => {
  console.log(log);
  console.log(constructor);
};

const WithTemplate = (template: string, hookId: string) => (constructor: any) => {
  const hookElement = document.getElementById(hookId);
  const object = new constructor();
  if(hookElement) {
    hookElement.innerHTML = template;
    hookElement.querySelector('h1')!.textContent = object.name;
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Felix';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

/**
 * Decorator for property
 * this type of decorator receives 2 args: target property and property name
 */
const Log = (target: any, propName: string | Symbol) => {
  console.log('Property decorator');
  console.log(target, propName);
};

/**
 * Accessor decorator
 */
const AccesorParam = (target: any, nameMember: string, propDescriptor: PropertyDescriptor) => {
  console.log('Accessor decorator');
  console.log('target', target);
  console.log('nameMember', nameMember);
  console.log('propDescriptor', propDescriptor);
};

/**
 *  Method decorator
 */
const MethodDecorator = (target: any, nameMethod: string | Symbol, propDescriptor: PropertyDescriptor) => {
  console.log('Method decorator');
  console.log('target', target);
  console.log('nameMethod', nameMethod);
  console.log('propDescriptor', propDescriptor);
}

/**
 *  Parameter decorator
 */
const ParamDecorator = (target: any, name: string | Symbol, position: number) => {
  console.log('Method decorator');
  console.log('target', target);
  console.log('name', name);
  console.log('position', position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @AccesorParam
  set price (value: number) {
    if(value > 0) {
      this.price = value;
    } else {
      throw new Error('Not valid price');
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodDecorator
  getPriceWithTax (@ParamDecorator tax: number) {
    return this._price * (1 + tax);
  }
}
