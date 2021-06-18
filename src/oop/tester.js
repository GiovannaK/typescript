const arr = [1, 2, 3, 4, 5, 60, 7];

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

const a = firstNonConsecutive(arr);

console.log(a);
