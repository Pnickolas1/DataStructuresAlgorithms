// Memoized Fibonacci Solution
// Runtime: O(n) - linear

// Check to see if number already exists in cache
// if number is in cache, use that number
// if number is not in cache, calculate it and put
// it in cache so it can be used multiple times later

//index: index of number in fibonacci sequence
//cache: an array used as memory
function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

fibMemo(1000);
