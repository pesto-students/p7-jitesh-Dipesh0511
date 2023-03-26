let A = [2, 4, 2, 543, 23];
<<<<<<< HEAD
let difference = 541;
let temp = 0;
for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= A.length; j++) {
        if (A[i] - A[j] == difference && i != j) {
            temp = 1;
        }
        if (A[j] - A[i] == difference && i != j) {
=======
let B = 0;
let temp = 0;
for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= A.length; j++) {
        if (A[i] - A[j] == B && i != j) {
            temp = 1;
        }
        if (A[j] - A[i] == B && i != j) {
>>>>>>> 6c20a1b813fceba82e0455ca800675eff757f91d
            temp = 1;
        }
    }
}
if (temp == 1) {
<<<<<<< HEAD
    console.log(1) // it means it found the elements having same difference
}
if (temp == 0) {
    console.log(2) // it means it did not find the elements having same difference
=======
    console.log("Difference of two elements of A is B")
}
if (temp == 0) {
    console.log("Difference of two elements of A is not equal to B")
>>>>>>> 6c20a1b813fceba82e0455ca800675eff757f91d
}