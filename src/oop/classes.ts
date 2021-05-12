export class Empresa {
  public readonly nome: string; // public redundante
  private readonly colaboradores: /*readonly -> para array não alterável*/ Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Giovanna', 'Cunha');
const colaborador2 = new Colaborador('Luiz', 'Silva');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador({
  nome: 'Daniel',
  sobrenome: 'Santos',
});
empresa1.mostrarColaboradores();
/* console.log(colaborador1); */
