function bitcoinMining(input) {
let goldEachDay = input
let bitcoinPrice = 11949.16
let goldPrice = 67.51;
let sumMoney = 0;
let countDays = 0;
let isFirstDay = false;
let boughtBitcoins = 0;
let goldToLeva = 0;
let firstDay = '';

for(let i = 0; i < goldEachDay.length; i++) {
    countDays++;

    if(countDays % 3 === 0) {
        let stolenGold = (30 / 100) * goldEachDay[i]
         goldToLeva = (goldEachDay[i] - stolenGold )  * goldPrice
    }
    else {
        goldToLeva = goldEachDay[i] * goldPrice
    }
    
    sumMoney += goldToLeva;

    if(sumMoney >= bitcoinPrice && !isFirstDay) {
        sumMoney -= bitcoinPrice;
        firstDay = `Day of the first purchased bitcoin: ${countDays}`;
        isFirstDay = true;
        boughtBitcoins++
    }

    while(sumMoney >= bitcoinPrice) {
        sumMoney -= bitcoinPrice
        boughtBitcoins++
    }
}

console.log(`Bought bitcoins: ${boughtBitcoins}`);
if(firstDay !== '') {
    console.log(firstDay);
}
console.log(`Left money: ${sumMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])
//bitcoinMining([50, 100])
//bitcoinMining([3124.15, 504.212, 2511.124])