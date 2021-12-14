type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const filtrado = myFilter<number>(arr, (value) => value < 4);

console.log(filtrado);
