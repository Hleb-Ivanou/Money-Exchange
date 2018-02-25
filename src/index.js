// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    var exch = {};
    var currency = currency;

    if (currency < 0) {
      exch = {};
    } else if (currency > 10000) {
      exch = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {
      for (var key in coins) {
        exch[key] = Math.floor(currency / coins[key]);
        currency = currency - exch[key] * coins[key];
        if (exch[key] == 0) {
          delete exch[key];
        }
      }
    }
    
    return exch
}
