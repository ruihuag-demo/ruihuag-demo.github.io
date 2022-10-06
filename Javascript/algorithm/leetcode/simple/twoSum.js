/**
 167. 两数之和 II - 输入有序数组
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */


 var twoSum1 = function(numbers, target){
    let num  = [];
    //纯暴力
    for(let i =0; i<numbers.length; i++){
        for(let j=1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target&& i!=j){
                num.push(i+1);
                num.push(j+1);
                return num;
            }
        }
    }
    return num;
 }

 var twoSum = function(numbers, target){
    let num  = [];
    //动态规划法
    //主要思想把差值保存下来
    for(let i =0; i<numbers.length; i++){
        let temp = target - numbers[i];//拿到第i的数据和结果的差值
        // console.log(numbers, num[temp]);
        if(num[temp] !== undefined ) {
            console.log(num[temp])
            return [num[temp]+1, i+1];
        }
        num[numbers[i]] = i;//将第i个数据放到对应索引的位置
        
    }
    // return num;
 }



 console.log(twoSum([2, 7, 11, 15],18))
 console.log(twoSum([2, 3, 4],6))
 console.log(twoSum([-1, 0],-1));


//  let str = [2, 7, 11, 15];
let str = [];
str[2] = 1;
console.log(str[2])
//  console.log(str[7]);
//  console.log(str)