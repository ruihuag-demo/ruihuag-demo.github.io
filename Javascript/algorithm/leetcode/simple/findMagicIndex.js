/**
 面试题 08.03. 魔术索引
魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。

示例1:

 输入：nums = [0, 2, 3, 4, 5]
 输出：0
 说明: 0下标的元素为0
示例2:

 输入：nums = [1, 1, 1]
 输出：1
提示:

nums长度在[1, 1000000]之间
 */

var findMagicIndex = function(nums) {
    for(let i =0,len=nums.length ; i<len ; i++){
        if(nums[i] === i) return i;
    }
    return -1;
};

// var findMagicIndex2 = nums =>{
//     let magicIndex = Infinity;
//     // let right = nums.length;
//     // let left = 0;
//     const search = (left, right) =>{
//         if(left > right) return;
//         if(magicIndex != Infinity) return;
//         const mid = (left + right) >>> 1;
//         search(0, nums.length -1);
//         if(nums[mid] == mid){
//             magicIndex = Math.min(magicIndex, mid);
//         }
//         // search(mid + 1, right);
//         return ;
//     }
//     search(0, nums.length - 1);
//     return magicIndex === Infinity ? -1 :magicIndex;
// }

console.log(findMagicIndex([0, 2, 3, 5]))
// console.log(1000>>>1)