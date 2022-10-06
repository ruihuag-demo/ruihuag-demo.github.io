/**

	给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
	最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
	你可以假设除了整数 0 之外，这个整数不会以零开头。

	1 <= digits.length <= 100
	0 <= digits[i] <= 9

 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let len = digits.length - 1;
	digits[len] = digits[len] + 1;
	for (let i = len; i + 1; i--) {
		if (digits[i] > 9) {
			digits[i] = 0;
			if (digits[i - 1]) {
				digits[i - 1] = digits[i - 1] + 1
			} else {
				digits.unshift(1)
			}
		} else break;
	}
	return digits;
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([4, 3, 2, 9]))