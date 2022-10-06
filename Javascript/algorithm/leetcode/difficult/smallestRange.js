//不会
/**
 632. 最小区间
你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。

我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。

示例 1:

输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
输出: [20,24]
解释: 
列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。
注意:

给定的列表可能包含重复元素，所以在这里升序表示 >= 。
1 <= k <= 3500
-105 <= 元素的值 <= 105
对于使用Java的用户，请注意传入类型已修改为List<List<Integer>>。重置代码模板后可以看到这项改动。
 */

/**
 * 题目转换,在k个数组分别找出一个数使其的两两差值最小 
 */

 /**
 * @param {number[][]} nums
 * @return {number[]}
 */

var smallestRange = function(nums) {
    // let minRange = (10)**5;
    // let maxRange = (-10) ** 5;
    // let minSub = undefined;
    // const pointer= Array.from({length : nums.length},()=>0) ;
    // function sub_sum(pointer){
    //     let outNum = 0;
    //     for(let i=0, len = nums.length; i<len-1;i++){
    //         outNum += nums[i][pointer[i]] - nums[i+1][pointer[i+1]];
    //     }
    //     return outNum;
    // }
    // while(true){
    //     for(let i =0 , len = nums.length; i<len;i++){
    //         minSub = Math.min(minSub, sub_sum(pointer))
    //         break;
    //     }
    //     break;
    // }
    // for(let i=0 ,len = nums.length;i<len;i++) 
    //     minRange=Math.min(minRange, nums[i][0])
    // for(let i=0 ,len = nums.length;i<len;i++) 
    //     maxRange=Math.max(maxRange, nums[i][nums[i].length-1])
    // return [minRange, maxRange];
};
console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]))

