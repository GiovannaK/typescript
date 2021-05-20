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
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Hello');
    return super.getNomeCompleto(); //  chama o método real da super classe (Pessoa)
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente => ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Giovanna', 'Cunha', 20, '7464874893', '0001');
const cliente = new Cliente('Giovanna', 'Cunha', 20, '7464874893');
const pessoa = new Pessoa('Giovanna', 'Cunha', 20, '7464874893');
console.log(aluno);
console.log(cliente);
console.log(pessoa);
