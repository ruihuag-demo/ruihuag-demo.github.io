/**
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 true ；不是，则返回 false 。

 

示例 1：

输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
示例 2：

输入：n = 2
输出：false
 

提示：

1 <= n <= 231 - 1

 * @param {number} n
 * @return {boolean}
 */

/* time: 84ms, memory: 40.1mb */
var isHappy2 = function (n) {
	let result = 0;
	String(n).split("").map(item => result += Number(item) * Number(item))
	if (result === 1) return true;
	if (result === 4) return false;
	return isHappy(result);
};


var isHappy = function (n) {
	// String(n).split("").map(item => result += Number(item) * Number(item))
	const getSum = n => {
		let result = 0;
		while (n) {
			result += (n % 10) * (n % 10)
			n = parseInt(n / 10)
		}
		return result;
	}
	// console.log('result', result);
	// if (result === 1) return true;
	// if (result === 4) return false;
	// return isHappy(result);
	const map = [];
	while (!map.includes(n)) {
		map.push(n);
		n = getSum(n);
	}
	return n === 1;
};

var isHappy1 = function (n) {
	const getSum = num => {
		let sum = 0;
		while (num) {
			sum += (num % 10) * (num % 10)
			num = parseInt(num / 10)
		}
		return sum;
	}
	const map = [];
	while (!map.includes(n)) {
		map.push(n);
		n = getSum(n);
	}
	return n === 1;
};

console.log(isHappy(19))
console.log(isHappy(7))
console.log(isHappy(2))
