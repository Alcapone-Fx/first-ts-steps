type Combinable = number | string;
type ConversionDescriptor = 'text' | 'number';

function combine2(n1: Combinable, n2: Combinable, resultConversion: ConversionDescriptor) {
  // Adding runtime type check
  if ((typeof n1 === 'number' && typeof n2 === 'number') || resultConversion === 'number') {
    return +n1 + +n2;
  }
  
  return `El resultado es: ${n1.toString() + n2.toString()}`;
}

console.log(combine2(30, 26, 'number'));

console.log(combine2('fx ', 'Navas', 'text'));
