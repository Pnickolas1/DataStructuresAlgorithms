// Search for a fiven value (key) inside of al list (numArray)
//Runtime O(logn)
// The given numArray must be sorted in ascending order
// Recursion Solution

function binarySearch(numArray, key) {
  numArray = numArray.sort(function(a, b) {
    return a - b;
  });
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
  //returns false when middleElem != key or when array length has length of 0 or 1
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
