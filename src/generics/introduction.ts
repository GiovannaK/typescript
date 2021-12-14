type FilterCallback<U> = <T>(value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = ['a', 'b', 5, 6, 1];

console.log(array.filter((value) => value < 5));

const filtrado = meuFilter(array, (value) => value < 5);
console.log(filtrado);
