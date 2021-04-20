// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatena(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concate = concatena('a', 'b', 'c');
const upper = toUpper('a', 'b', 'c');
console.log(result);
console.log(upper);
