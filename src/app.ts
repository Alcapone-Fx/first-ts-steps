/**
 * A Generic Type is a type wich is kind of connected with some other type
 * and is really flexible regarding wich axact what other type is
 * Generic types help us to have more information
 *
 */

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('This has done'); reject('Error')}, 1000);
});

promise.then((data) => {data.length});
