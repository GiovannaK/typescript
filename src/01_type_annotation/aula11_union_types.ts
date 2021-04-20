function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(2, 5));
console.log(addOrConcat('a', 'c'));
console.log(addOrConcat(10, '20'));
