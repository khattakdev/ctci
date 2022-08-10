function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibM(n, memo = []) {
  if (memo[n] != undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fibM(n - 1, memo) + fibM(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibM(50));
