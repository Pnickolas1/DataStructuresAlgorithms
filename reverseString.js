//Takes in a string
//Returns a new string with the reversed order of characters

function reverse1(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// solution in O(n) - linear - runtime
function reverse2(str) {
  let reversedStr = '';
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

// solution in O(n) - linear - runtime
function reverse3(str) {
  return str.split('').reduce((reversedStr, char) => char + reversedStr, '');
}
