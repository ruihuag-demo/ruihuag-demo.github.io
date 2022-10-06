/*
 * File: 20-有效的括号.js
 * Project: 20-29
 * Author: ruihuag
 * File Created: Sunday, 27th June 2021 6:09:11 pm
 * Modified By: ruihuag
 * Last Modified: Sunday, 27th June 2021 6:21:39 pm
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
		s = s.replace('{}', '')
		s = s.replace('[]', '')
		s = s.replace('()', '')
	}
	return s === '';
};


console.log('a:', isValid('()[]{}'));
console.log('b:', isValid('(]'));
console.log('a:', isValid('([)]'));
console.log('a:', isValid('{[]}'));