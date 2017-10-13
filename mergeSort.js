//take in a single, unsorted as a parameter
//split the array into two halves
function mergeSort(arr) {
  //return base case
  if (arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

//take in two sorted arrays as parameters
//merges those sorted arrays into one sorted array
//return one sorted array
function merge(array1, array2) {
  var result = [];
  while (array1.length && array2.length) {
    var minElement;
    minElemmet = array1[0] < array2[0] ? array1.shift() : array2.shift();
    result.push(minElemmet);
  }

  result = array1.length ? result.concat(array1) : result.concat(array2);
  return result;
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);
