function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Giovanna',
  sobrenome: 'Cunha',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('hfuhf', 'u83483y974');
pessoa.exibirNome();
export { pessoa };
