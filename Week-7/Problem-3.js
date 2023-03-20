let num = [0, 1, 1, 1, 2, 2, 2, 0, 0],
    temp = 0;
console.log(num);
for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}
console.log(num)