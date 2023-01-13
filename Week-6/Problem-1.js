let num = [2, -2, 4, 1, -5, 43, -5]
num = num.sort();
let sum = 0;
let subarray = [];
for (let i = num.length - 4; i < num.length; i++) {
    subarray.push(num[i])
}
console.log(`Sub Array elements are ${subarray}`);
for (let el of subarray) {
    sum += el
}
console.log(`Sum is ${sum}`);