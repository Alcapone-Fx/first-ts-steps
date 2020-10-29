/**
 * The interface allows us to define the structure of an object
 * and we can use it as a type check that objects must have
 * the interface structure
 */
interface Greetable{
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable{
  age: number;
  
  constructor(public name: string){
    this.age = 30;
  }
  
  greet(phrase: string){
    console.log(`${phrase} ${this.name}`);
  }
}

let user1 = new Person("Felix");

user1.greet("Hi there - I am");
 