// Optimization: Stop looping through a teh square root of 'num'
// return all prime number up to 'num' in an array

function sieveOfEratosthenes(num) {
    
    var primes = [];
    for (var i = 0; i<= num; i++) {
      primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;
    
    for (var i = 2; i <= Math.sqrt(num); i++){
      for (var j = 2; j * i <= num; j++) {
        primes[i*j] = false;
      }
    }
    var result =[];
    for(var k = 0; k < primes.length; k++) {
      if(primes[k]) result.push(k);
    }
    return result;
  }
  
  sieveOfEratosthenes(20);
  //should return [2, 3, 5, 7, 11, 13, 17, 19]