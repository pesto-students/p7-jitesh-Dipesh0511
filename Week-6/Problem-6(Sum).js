/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(num, target) {
    let closest = Infinity,
        sum = 0,
        pos1, pos2, pos3;
    num = num.sort(function(a, b) { return a - b });
    if (target > 0) {
        for (let i = 0; i < num.length - 2; i++) {
            let left = i + 1,
                right = num.length - 1;
            while (left < right) {
                sum = num[i] + num[left] + num[right];
                if (((sum - target) < (closest - target)) || ((target - sum) < (target - closest))) {
                    closest = sum;
                    pos1 = i;
                    pos2 = left;
                    pos3 = right;
                }
                if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return closest;
    }
    if (target < 0) {
        for (let i = 0; i < num.length - 2; i++) {
            let left = i + 1,
                right = num.length - 1;
            while (left < right) {
                sum = num[i] + num[left] + num[right];
                if (((target - sum) > (target - closest))) {
                    closest = sum;
                    pos1 = i;
                    pos2 = left;
                    pos3 = right;
                }
                if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return closest;
    }
};
let arr = [1, 1, 1, 1]
let sol = threeSumClosest(arr, -100);
console.log(sol);