/**
 * Object types are written almost like objects, we have key-types pairs
 * It is better to TS infers the object types
 */
// const person: {
//   name: string;
//   age: number
// } = {
//   name: 'Felix',
//   age: 30
// };
const person = {
  name: 'Felix',
  age: 30,
  hobbies: ['Sports', 'Cooking'] // hobbies: string[]
};

let favouriteActivities: string[];
// favouriteActivities = ['Sports', 1]; // Type 'number' is not assignable to type 'string'

// console.log(person.nickname); // error
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error: Property 'map' does not exist on type 'string'
}