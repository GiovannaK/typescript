/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable prefer-const */
let x = 10;
const y = 10; // tipo literal ou seja só pode ser 10, subtipo de number

/* let a: 100 = 100;
a = 120; */

//assertion
let a = 100 as const;

const person = {
  nome: 'Giovanna' as const,
  sobrenome: 'Cunha',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

/* person.nome = 'ajfdh'; */

//module mode
export default 1;
