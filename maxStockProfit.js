// takes in anrray of prices as parameter
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

maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
