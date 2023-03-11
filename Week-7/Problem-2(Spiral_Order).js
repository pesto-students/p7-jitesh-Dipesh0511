const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let spiral = [];
let last_row = num.length - 1,
    last_col = num[0].length - 1,
    i = 0,
    j = 0;
while (i <= last_row & j <= last_col) {
    for (let k = i; k <= last_col; k++) {
        spiral.push(num[j][k])
    }
    i++;
    for (let k = i; k <= last_row; k++) {
        spiral.push(num[k][last_col])
    }
    last_col--;
    if (i <= last_row) {
        for (let k = last_col; k >= j; k--) {
            spiral.push(num[last_row][k])
        }
        last_row--;
    }
    if (j <= last_col) {
        for (let k = last_row; k >= i; k--) {
            spiral.push(num[k][j])
        }
        j++;
    }
}
console.log(spiral);