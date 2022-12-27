function combine(n1: number | string, n2:number | string) {
  // Adding runtime type check
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
  
  return `El resultado es: ${n1.toString() + n2.toString()}`;
}

console.log(combine(30, 26));

console.log(combine('fx ', 'Navas'));
