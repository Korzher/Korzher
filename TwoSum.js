/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let i = 0;
    let j = 0;
    let k = 0;

     for (i = 0; i <= nums.length; ++i) {
        j = target - nums[i]; 
        if (nums[i] == j && nums.lastIndexOf(j) == i) {
        continue
        } else if (nums.includes(j)) {
        k = nums.lastIndexOf(j);
        break
        } else {
        continue
    }
    };

    return [i, k]
};
