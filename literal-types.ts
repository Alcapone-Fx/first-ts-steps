function combine1(n1: number | string, n2:number | string, resultConversion: 'text' | 'number') {
  // Adding runtime type check
  if ((typeof n1 === 'number' && typeof n2 === 'number') || resultConversion === 'number') {
    return +n1 + +n2;
  }
  
  return `El resultado es: ${n1.toString() + n2.toString()}`;
}

console.log(combine1(30, 26, 'number'));

console.log(combine1('fx ', 'Navas', 'text'));
