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
