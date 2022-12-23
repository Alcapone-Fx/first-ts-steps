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
function add(n1: number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (!showResult) {
        return `El resultado es: ${result}`;
    }
    console.log(`${phrase} ${result}`)
}

/**
 * Type inference & type assignment
 */
const number1 = 2;
const number2 = 4;
let number3: number;
const printResult = true;
const resultPhrase = 'Result is:';

number3 = 0x2;

// let result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase);

// console.log(result);
