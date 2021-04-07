/*eslint-disable*/
// sem inferir tipos
let nome : string = 'Giovanna';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer symbol')
/* let big: bigint = 10n; */

// referencia array e objetos

/* let arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5,]; */
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5,];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

// ? opcional
/* let pessoa: {nome: string, idade: number, adult?: boolean} = {
  idade: 20,
  nome: 'Giovanna'
} */

/* let pessoa: Pessoa = {
  idade: 30,
  nome: 'Giovanna'
}
tipo próprio
 */

function soma(x:number, y:number): number{
  return x + y
}

const result = soma(2, 2);

const soma2: (x:number, y:number) => number = (x, y) => x + y
