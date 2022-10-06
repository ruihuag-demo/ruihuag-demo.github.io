/*
 * File: 14-最长公共前缀.js
 * Project: 10-19
 * Author: ruihuag
 * File Created: Monday, 28th June 2021 10:12:37 pm
 * Modified By: ruihuag
 * Last Modified: Monday, 28th June 2021 10:36:54 pm
 */



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let result = "";
	for (let i = 0; i < strs[0].length; i++) {
		if (strs.filter(item => item[i] === strs[0][i] && "1").length === strs.length)
			result += strs[0][i]
		else break;
	}
	return result;
	// return strs[0].split("").map((it, i) => strs.filter(item => item[i] === it && "1").length === strs.length && it).filter(i => i).join("") || ""
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["cir", "car"]))