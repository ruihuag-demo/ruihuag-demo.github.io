/*
 * File: LCP 07. 传递信息.js
 * Project: 0-9
 * Author: ruihuag
 * File Created: Thursday, 1st July 2021 11:25:13 pm
 * Modified By: ruihuag
 * Last Modified: Thursday, 1st July 2021 11:51:14 pm
 */
/*  */

/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}SS
 */
var numWays = function (n,relation, k) {
	let ways = 0;
	const edges = new Array(n).fill(0).map(() =>
		new Array());

	for (const [src, dst] of relation) {
		edges[src].push(dst);
	}

	const dfs = (index, steps) => {
		if (steps === k) {
			if (index === n - 1) {
				ways++;
			}
			return;
		}
		const list = edges[index];
		for (const nextIndex of list) {
			dfs(nextIndex, steps + 1);
		}
	}

	dfs(0, 0);
	return ways;
};