export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '00.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}
const pessoa1 = new Pessoa('Giovanna', 'Cunha', 20, '7464874893');
console.log(pessoa1);

const pessoa2 = Pessoa.criaPessoa('Giovanna', 'Cunha');
console.log(pessoa2);
pessoa1.metodoNormal();
