type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const car = {
  color: 'black',
  brand: 'Ford',
};

const cars = getKey(car, 'color');
