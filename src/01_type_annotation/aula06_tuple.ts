//tuple
const dadosCliente1: readonly [number, string] = [1, 'Giovanna'];
const dadosCliente2: [number, string, string?] = [1, 'Giovanna'];
const dadosCliente3: [number, string, ...string[]] = [
  1,
  'Giovanna',
  'Kelli',
  'ajkdhjfr',
];
// especificar quantidade de tipos
/* dadosCliente1[0] = 2;
dadosCliente1[1] = 'aaaaa'; */

//readonly string

const array1: readonly string[] = ['Giovanna', 'jdhjfhfi'];
const array2: ReadonlyArray<string> = ['Giovanna', 'jdhjfhfi'];

console.log(dadosCliente3);
