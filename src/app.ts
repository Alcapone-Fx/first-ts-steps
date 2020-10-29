/**
 * The interface allows us to define the structure of an object
 * and we can use it as a type check that objects must have
 * the interface structure
 */
interface Person{
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1={
  name: "Felix",
  age: 29,

  greet(phrase: string){
    console.log(`${phrase} ${this.name}`);
  }
}

user1.greet("Hi there - I am");