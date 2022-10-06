/**
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle === "") return 0;
	let nl = needle.length;
	for (let i = 0; i <= haystack.length - nl; i++) {
		if (haystack.slice(i, nl + i) === needle)
			return i;
	}
	return - 1;
};

let haystack = "hello", needle = "ll";
console.log(strStr(haystack, needle));//2
console.log(strStr("a", "a")); // 0
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0
