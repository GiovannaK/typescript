export class Pessoa {
  constructor(
    private nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  /*   getCpf(): string { // forma antiga
    return this.cpf;
  }

  setCpf(valor: string): void {
    this.cpf = valor;
  } */

  get cpf(): string {
    return this._cpf;
  }
}

const pessoa = new Pessoa('Giovanna', 'Cunha', 20, '7464874893');
pessoa.cpf = '333333333'; // chama o setter
console.log(pessoa.cpf);
