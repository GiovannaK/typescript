export class Person<T, U> {
  constructor(public nome: T, public idade: U) {}
}

/* const pessoa1 = new Person('Giovanna', 20); */

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isStackEmpty()) return undefined;

    this.contador--;

    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isStackEmpty(): boolean {
    return this.contador === 0;
  }

  stackSize(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

const pilha = new Stack<number>();
pilha.push(1);
pilha.push(2);
pilha.showStack();

while (!pilha.isStackEmpty()) {
  console.log(pilha.pop());
}
