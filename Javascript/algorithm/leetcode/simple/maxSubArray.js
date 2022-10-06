/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let max = eval(nums.join("+"))
	for (let i = 0; i < nums.length; i++) {
		let sum = nums[i];
		max = max > sum ? max : sum;
		for (let j = i + 1; j < nums.length; j++) {
			sum += nums[j];
			max = max > sum ? max : sum;
		}
	}
	return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([0]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-10000]));
console.log(maxSubArray([-2, 1]));

// const result = Array.from({ length: nums.length }, () => Array.from({ length: nums.length }, () => max));
