function collectOddValues(arr) {
  const result = [];

  function helperMethod(arr, index) {
    if (index == arr.length) return;

    if (arr[index] % 2 != 0) {
      result.push(arr[index]);
    }

    index++;
    helperMethod(arr, index);
  }

  helperMethod(arr, 0);
  return result;
}
