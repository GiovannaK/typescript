let x; // em geral não usamos undefined

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareToString = squareOf('2');

if (squareOfNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareToString);
}
