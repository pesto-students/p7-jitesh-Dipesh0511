function next_greater_num(arr) {
    let a = [],
        count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            count = 0;
            if (arr[i] < arr[j]) {
                a.push(arr[j])
                count++;
                break;
            }
        }
        if (count == 0) {
            count = 0;
            a.push(-1)
        }
    }
    console.log(arr)
    return a;
}
let arr = [6, 8, 0, 1, 3]
const ll = next_greater_num(arr);
console.log(`New Array is ${ll}`);