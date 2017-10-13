// return array, sorted with bubble sort

function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));
console.log(bubbleSort([5, 3, 8, 2, 1, 4]));

// <array.length -1> is the number of passes through the array to get sorted array
