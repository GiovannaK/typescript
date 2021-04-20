/* eslint-disable prettier/prettier */
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

// geralmente usadas para tratar erro, algo que possivelmente pode parar a aplicação

criaErro();