<<<<<<< HEAD
var threeSumClosest = function(nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length - 1];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1,
            end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > target) {
                end--;
            } else {
                start++;
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result;
};

let arr = [1, 2, 3, 1, 346]
let sol = threeSumClosest(arr, -1);
console.log(sol); // Closest sum of three numbers
=======
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
>>>>>>> 6c20a1b813fceba82e0455ca800675eff757f91d
