// Returns every pair of numbers from 'numArray'
// that adds up to the given sum

//Guidelins:
// Result should be an array of arrays
// Any number in the 'numArray' can be used in multiple pairs

// Runtime: O(n) complexity with hash table
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
