let A = [2, 4, 2, 543, 23];
let difference = 541;
let temp = 0;
for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= A.length; j++) {
        if (A[i] - A[j] == difference && i != j) {
            temp = 1;
        }
        if (A[j] - A[i] == difference && i != j) {
            temp = 1;
        }
    }
}
if (temp == 1) {
    console.log(1) // it means it found the elements having same difference
}
if (temp == 0) {
    console.log(2) // it means it did not find the elements having same difference
}