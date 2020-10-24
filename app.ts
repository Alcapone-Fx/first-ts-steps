//Hello Typescript world
//console.log("Hello world");

/**
 * Function that add to numbers
 * 
 * Is very easy change to TS
 * The other basic types are :boolean :string
 * 
 * Important to know: all the core types are lowercase
 * 
 * @param n1 First param to add
 * @param n2 Second param to add
 */
function add(n1: number, n2:number) {
    return `El resultado es: ${n1 + n2}`;
}

/**
 * Type inference & type assignment
 */
const number1 = 2;
const number2 = 4;
let number3: number;

number3 = 0x2;

let result = add(number1, number2);

console.log(result);
