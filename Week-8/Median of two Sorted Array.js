var findMedianSortedArrays = function(num1, num2) {
    let arr = [],
        i = 0,
        j = 0,
        mid;
    while (i < num1.length) {
        arr[i] = num1[i]
        i++
    }
    while (j < num2.length) {
        arr.push(num2[j]);
        j++;
    }
    arr = arr.sort(function(a, b) { return a - b });
    console.log(arr)
    let l = 0,
        h = arr.length;
    if ((arr.length - 1) % 2 != 0) {
        let i = 0,
            j = arr.length - 1;
        while (i < j) {
            if (j - i == 1) {
                return ((arr[i] + arr[j]) / 2)
            }
            i++;
            j--;
        }
    }
    if ((arr.length - 1) % 2 == 0) {
        mid = l + parseInt((h - l) / 2);
        return arr[mid];
    }
}
let num1 = [1, 3];
let num2 = [2, 7];
console.log(findMedianSortedArrays(num1, num2))