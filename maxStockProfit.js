// takes in an array of prices as parameter
// a max profit of 0 is treated as any other max profit value
// solution in O(n) - linear - runtime
// returns the max possible profit of the day
// returns -1 when no profit is possible

function maxStockProfit(pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

// solution in O(n2) - linear - runtime
function quadMaxProfit(pricesArr) {
  maxProfit = -1;
  for (var i = 0; i < pricesArr.length - 1; i++) {
    for (var j = i + 1; j < pricesArr.length - 1; j++) {
      if (pricesArr[i] < pricesArr[j]) {
        var profit = pricesArr[j] - pricesArr[i];
        if (maxProfit < profit) maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
console.log(maxStockProfit([7, 13, 2, 9, 11, 3]));
console.log(quadMaxProfit([10, 18, 4, 5, 9, 6, 16, 12]));
console.log(quadMaxProfit([7, 13, 2, 9, 11, 3]));
