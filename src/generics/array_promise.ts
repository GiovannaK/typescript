type Tipo = number;

const array: Array<number> = [1, 2, 3];
console.log(array);

export async function name() {
  return 1;
}

function minhaPromise(): Promise<Tipo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}

name().then((resultado) => console.log(resultado + 1));
