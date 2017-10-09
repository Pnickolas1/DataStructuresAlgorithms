function fact(num) {
  var n = num < 2;
  return n ? 1 : num * fact(num - 1);
}

function factorial(num) {
  if (num < 2) {
    return 1;
  } else return num * factorial(num - 1);
}

fact(4);
