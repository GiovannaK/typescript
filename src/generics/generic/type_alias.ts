/* eslint-disable @typescript-eslint/no-unused-vars */
/* export interface PessoaProtocolo<T = string, U = number> {
  firstName: T;
  lastName: T;
  age: U;
} */

export interface PessoaProtocolo<T, U> {
  firstName: T;
  lastName: T;
  age: U;
}

const aluno: PessoaProtocolo<string, number> = {
  firstName: 'Giiovanna',
  lastName: 'Cunha',
  age: 20,
};
