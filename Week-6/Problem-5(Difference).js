let A = [2, 4, 2, 543, 23];
let B = 0;
let temp = 0;
for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= A.length; j++) {
        if (A[i] - A[j] == B && i != j) {
            temp = 1;
        }
        if (A[j] - A[i] == B && i != j) {
            temp = 1;
        }
    }
}
if (temp == 1) {
    console.log("Difference of two elements of A is B")
}
if (temp == 0) {
    console.log("Difference of two elements of A is not equal to B")
}