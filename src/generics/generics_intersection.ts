// Junta dois objetos

function joinTwoObjects<O1, O2>(obj: O1, obj2: O2): O1 & O2 {
  /* return { ...obj, ...obj2 }; */
  return Object.assign({}, obj, obj2);
}

const obj1 = { key1: 'Value1' };
const obj2 = { key2: 'value2' };

const uni = joinTwoObjects(obj1, obj2);
console.log(uni);
