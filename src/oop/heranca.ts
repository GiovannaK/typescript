export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Aluno => ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente => ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Giovanna', 'Cunha', 20, '7464874893');
const cliente = new Cliente('Giovanna', 'Cunha', 20, '7464874893');
const pessoa = new Pessoa('Giovanna', 'Cunha', 20, '7464874893');
console.log(aluno.getNomeCompleto());
console.log(cliente);
console.log(pessoa);
