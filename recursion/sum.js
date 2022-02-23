function sum(num) {
  if (num == 1) return 1;
  num--;
  return num + sum(num);
}
