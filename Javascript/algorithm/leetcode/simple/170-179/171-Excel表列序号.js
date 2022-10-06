/*
 * File: 171-Excel表列序号.js
 * Project: 170-179
 * Author: ruihuag
 * File Created: Wednesday, 30th June 2021 9:51:39 am
 * Modified By: ruihuag
 * Last Modified: Wednesday, 30th June 2021 10:09:43 am
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	let result = 0;
	const arr = columnTitle.split("")
	for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
		result += ((arr[i].charCodeAt() - 64) * Math.pow(26, j))
	}
	return result;
};




console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))