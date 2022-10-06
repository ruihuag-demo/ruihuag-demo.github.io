/**
343. 整数拆分
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
说明: 你可以假设 n 不小于 2 且不大于 58。
 */

 /**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n<=1) return n;
    let max = 1;
    for(let i = 2 ,divisor = -1;i<=58;i++){
        divisor = parseInt(n/i);
        if(i===2&&(divisor===0||divisor===1)) return n-1;
        let rem = n - (divisor*i);
        let temp = 1;
        for(let j = 0 ;j<i-rem;j++){
            temp*=divisor;
        }
        for(let j = 0; j< rem; j++){
            temp*=(divisor+1);
        }
        max = Math.max(temp, max);
        if(i>2&&divisor<=1){
            break;
        }
    }
    return max;
};
//拆三的贪心算法
var integerBreak2 = function(n) {
    if(n == 2)
        return 1;
    if(n == 3)
        return 2;
    let a = 1;
    while(n > 4){
        n = n - 3;
        a = a * 3;
    }
    return a * n;
};

// console.log(integerBreak(10))
// console.log(integerBreak(2))
// console.log(integerBreak(30))
console.log(integerBreak(3))
console.log(integerBreak2(8))