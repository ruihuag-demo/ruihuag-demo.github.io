/**
	给你两个二进制字符串，返回它们的和（用二进制表示）。
	输入为 非空 字符串且只包含数字 1 和 0。

	提示：

	- 每个字符串仅由字符 '0' 或 '1' 组成。
	- 1 <= a.length, b.length <= 10^4
	- 字符串如果不是 "0" ，就都不含前导零。

 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/* 位数太长会出问题 */
var addBinary2 = function (a, b) {
	let cc = String(Number(a) + Number(b)).split("")
	function calc() {
		for (let i = cc.length; i; i--) {
			if (cc[i - 1] === '2' || cc[i - 1] === '3') {
				cc[i - 1] = String(Number(cc[i - 1]) - 2)
				if (cc[i - 2]) {
					cc[i - 2] = String(Number(cc[i - 2]) + 1);
				} else {
					cc.unshift('1');
				}
			}
		}
	}
	if (cc.filter(i => Number(i) > 1).length > 0) calc();
	return cc.join("");
};

var addBinary = function (a, b) {
	let max = (a.length >= b.length ? a : b).split('');
	let min = a.length < b.length ? a : b

	for (let i = min.length, j = max.length; i; i--, j--) {
		if (min[i - 1] === '0') continue;
		else if (min[i - 1] === '1') {
			if (max[j - 1] === '0') max[j - 1] = '1';
			else if (max[j - 1] === '1') max[j - 1] = '2';
		}
	}
	function calc() {
		for (let i = max.length; i; i--) {
			if (Number(max[i - 1]) > 1) {
				max[i - 1] = String(Number(max[i - 1]) - 2);
				if (max[i - 2]) {
					max[i - 2] = String(Number(max[i - 2]) + 1);
				} else {
					max.unshift('1')
				}
			}
		}
	}
	if (max.filter(i => Number(i) > 0).length > 0) calc();
	return max.join('');
};


console.log('1A:', addBinary('11', '1'));/* 100 */
console.log('2A:', addBinary('1010', '1011'));/* 10101 */
console.log('3A:', addBinary('1111', '1111'));
// console.log('4A:', addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));