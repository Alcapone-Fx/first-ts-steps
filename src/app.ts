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
 * @param objectA 
 * @param objectB 
 */

function merge<T, U>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObject = merge({name: 'Felix', hobbies:['Coding', 'Sex', 'Video games']}, {age: 29});
console.log(mergedObject);
