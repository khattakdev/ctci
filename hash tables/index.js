// function Hash(key, arranLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = total + value;
//   }

//   total %= arranLen;
//   return total;
// }

console.log(Hash("pink", 10));
console.log(Hash("green", 10));
console.log(Hash("yellow", 10));

function Hash(key, arranLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = total * WEIRD_PRIME + value;
  }

  total %= arranLen;
  return total;
}
