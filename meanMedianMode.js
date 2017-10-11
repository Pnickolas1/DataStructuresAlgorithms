// functional programing example

//call ohter 3 function
//return obj which has mean, median, and mode
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

// return average value of the array
function getMean(array) {
  var sum = 0;
  array.forEach(num => {
    sum += num;
  });
  var mean = sum / array.length;
  return mean;
}

// return the middle value of the array for odd array
// return averge of two middle value for even array
function getMedian(array) {
  //sort numbers in ascending order
  array.sort(function(a, b) {
    return a - b;
  });
  var median;

  if (array.length % 2 !== 0) {
    // get middle index value on odd index;
    median = array[Math.floor(array.length / 2)];
  } else {
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

// return most frequent number in the given array
function getMode(array) {
  var modeObj = {};

  // populate modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
