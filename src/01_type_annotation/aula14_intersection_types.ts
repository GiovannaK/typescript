type TemNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };
type Pessoa = TemNome & temSobrenome & temIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'c';
type intersec = AB & AC;

const pessoa: Pessoa = {
  sobrenome: 'Cunha',
  nome: 'Giovanna',
  idade: 20,
};

console.log(pessoa);

export { pessoa };
