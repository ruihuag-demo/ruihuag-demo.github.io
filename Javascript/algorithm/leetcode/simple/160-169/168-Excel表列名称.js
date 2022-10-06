/*
 * File: 168-Excel表列名称.js
 * Project: 160-169
 * Author: ruihuag
 * File Created: Tuesday, 29th June 2021 5:31:38 pm
 * Modified By: ruihuag
 * Last Modified: Wednesday, 30th June 2021 9:47:16 am
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
/* 就是将数字转换为26进制, 然后转换为对应的数字 */
var convertToTitle = function (columnNumber) {
	let result = [];
	let temp = 0;
	while (columnNumber) {
		temp = columnNumber % 26;
		if (temp === 0) {
			if (columnNumber % 26 === 0)
				result.unshift("Z")
			columnNumber = (columnNumber - temp) / 26 - 1
		} else {
			result.unshift(String.fromCharCode(64 + parseInt(temp)))
			columnNumber = (columnNumber - temp) / 26;
		}
	}
	return result.join("");
};


console.log(convertToTitle(52));
console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(2147483647));