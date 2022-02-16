function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }

  return arr;
}

console.log(selectionSort([2, 1, 5, 9, 6, 10]));
