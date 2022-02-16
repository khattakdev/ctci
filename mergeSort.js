function merge(arrOne, arrTwo) {
  const newArr = [];
  var i = 0;
  var j = 0;
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      newArr.push(arrOne[i]);
      i++;
    } else {
      newArr.push(arrTwo[j]);
      j++;
    }
  }

  while (i < arrOne.length) {
    newArr.push(arrOne[i]);
    i++;
  }
  while (j < arrTwo.length) {
    newArr.push(arrTwo[j]);
    j++;
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([8, 1, 5, 6, 3, 7]));
