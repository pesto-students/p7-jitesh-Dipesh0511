let num = [2, -2, 4, 1, -5, 43, -5]
num = num.sort();
<<<<<<< HEAD
let sum = 0,
    count = 0;
let subarray = [];
for (let i = 0; i < num.length; i++) { // Check the index from which positive values start
    if (num[i] < 0) {
        count++;
    }
}
for (let i = count; i < num.length; i++) {
=======
let sum = 0;
let subarray = [];
for (let i = num.length - 4; i < num.length; i++) {
>>>>>>> 6c20a1b813fceba82e0455ca800675eff757f91d
    subarray.push(num[i])
}
console.log(`Sub Array elements are ${subarray}`);
for (let el of subarray) {
    sum += el
}
console.log(`Sum is ${sum}`);