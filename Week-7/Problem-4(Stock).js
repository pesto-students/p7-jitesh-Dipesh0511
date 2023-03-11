let num = [34, 1, 3, 1, 21, 323, 43, 3435, 2];
let profit = [];
let max1 = 0,
    day_buy = 0,
    day_sell = 0,
    price_buy = 0,
    price_sell = 0;
for (let i = 0; i <= num.length; i++) {
    for (let j = 0; j <= num.length; j++) {
        if ((num[i] - num[j]) > 0) {
            if (i > j) {
                profit.push(num[i] - num[j]);
            }
        }
    }
}
max1 = Math.max(...profit);
for (let i = 0; i <= num.length; i++) {
    for (let j = 0; j <= num.length; j++) {
        if (num[i] - num[j] == max1) {
            day_buy = j + 1;
            price_buy = num[j];
            price_sell = num[i];
            day_sell = i + 1;
        }
    }
}
if (day_buy == 0) {
    console.log("You cannot earn from this stock");
} else {
    console.log(`Buy Stock on ${day_buy}th day at price : ${price_buy}`);
    console.log(`Sell Stock on ${day_sell}th day at price : ${price_sell}`);
}