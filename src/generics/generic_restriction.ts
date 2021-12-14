type ObterChaveFn = <O, K extends keyof O>(Objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'cor');
console.log(vacinas);
