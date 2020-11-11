/**
 * A Generic Type is a type wich is kind of connected with some other type
 * and is really flexible regarding wich axact type what other type is
 * Generic types help us to have more information about the type to store or the
 * connected type
 */

/*
 * The simplest example of generic types is the array.
 * The array by itself is a type "a list of data"
 * An array stores certain kind of data in it
 *
 * In that notation we specify the type of data should go into the array
 * const names: Array<string> = [] === const names: string[] = []
 */
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {resolve('This has done'); reject('Error')}, 1000);
// });

// promise.then((data) => {data.length});

/**
 * In this case we are telling to TS the function will recieve two types,
 * maybe different types and TS understand that
 *
 * Type Constraints
 * With type constriants we are telling to TS that objectA and B could be whatever,
 * but mut be an object
 */

function merge<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObject = merge(
  { name: 'Felix', hobbies: ['Coding', 'Sex', 'Video games'] },
  { age: 29 }
);
console.log(mergedObject);

/*
 * Another Generic Function
 * We care only for the object that the function recieves contains a lenght property, nothing else
 */
interface ILengthy {
  length: number;
}

function countAndPrint<T extends ILengthy>(element: T) {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText];
}

/*
 * The "keyof" constraint
 * It is for telling TS that a parameter must be a key of certain object
 */

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Felix' }, 'name'));

/*
 *  Generic Classes
 * We can tell to TS that a class could manipulate a generic type
 *
 * We could tell to TS that our class is specialized and will be working with primitive types
 */

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1)
      this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Felix');
textStorage.addItem('Rene');
textStorage.removeItem('Rine');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Rene'});
// objectStorage.addItem({name: 'Felix'});
// objectStorage.removeItem({name: 'Rene'});
// console.log(objectStorage.getItems());
