export function funcao(this: Date, arg1: string, age: number): void {
  console.log(this);
  console.log(arg1, age);
}

funcao.call(new Date(), 'giovanna', 20);
funcao.apply(new Date(), ['giovanna', 20]);
