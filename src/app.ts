/**
 * The interface allows us to define the structure of an object
 * and we can use it as a type check that objects must have
 * the interface structure
 */

/**
 * Interface can be used as function types
 */
interface addFunctionType {
  (a: number, b: number): void;
}

let add: addFunctionType;

add = (a, b) => a + b;

/**
 * Optional name property
 */
interface Named {
  readonly name?: string;
}

/**
 * Different to classes, interfaces can extend more than one
 * interface
 */
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age: number;

  /**
   * Also a parameter could be optional (remember default properties)
   * @param name 
   */
  constructor(public name?: string) {
    this.age = 30;
  }

  greet(phrase: string) {
    let output = this.name ? `${phrase} ${this.name}` : `${phrase} Desconocido`;
    console.log(output);
  }
}

let user1 = new Person("Felix");
user1.greet("Hi there - I am");

let user2 = new Person();
user2.greet("Hi there - I am");