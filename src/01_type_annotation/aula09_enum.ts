// Enum _> NÃO LANÇA ERRORS QUANDO O ÍNDICE É TROCADO, RETORNA APENAS UNDEFINED
enum Cores {
  VERMELHO, //0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  VERDE = 200,
  ROXO = 'ROXO',
}

console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);
