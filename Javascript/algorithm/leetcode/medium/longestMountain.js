/**
我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：

B.length >= 3
存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
（注意：B 可以是 A 的任意子数组，包括整个数组 A。）

给出一个整数数组 A，返回最长 “山脉” 的长度。

如果不含有 “山脉” 则返回 0。

 

示例 1：

输入：[2,1,4,7,3,2,5]
输出：5
解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
示例 2：

输入：[2,2,2]
输出：0
解释：不含 “山脉”。

提示：
0 <= A.length <= 10000
0 <= A[i] <= 10000
 */
/**
 * @param {number[]} A
 * @return {number}
 */
/**
 * 
 * 定义一个flag up = -1 和 down =-1 设置为原值
 * up = 0 表示现在上升, up = 1表示在顶峰
 * down =0 表示在下降, down = 1表示在谷底
 */
var longestMountain = function(A) {
  let flag = {
      up:-1,
      down:-1
  }
  let ans = 0;
  for(let i = 0,len = 0;i<A.length;i++){
      if(flag.up == -1 && flag.down == -1){
          if(A[i]<A[i+1]){
              len++;
              flag.up = 0;
              continue;
          }
      }
      if(flag.up == 0 && flag.down == -1){
          if(A[i]<A[i+1]){
              len++;
              continue;
          }
          if(A[i] == A[i+1]){
              len = 0;
              flag.up = -1;
              continue;
          }
          if(A[i]>A[i+1]){
              len++;
              if(A[i+2] == undefined){
                  ans = Math.max(len+1,ans);
                  break;
              }
              flag.up = 1;
              flag.down = 0;
              continue;
          }
      }
      if(flag.up == 1 && flag.down == 0){
          if(A[i]>A[i+1]){
              len++;
              if(A[i+2] == undefined){
                  ans = Math.max(len+1,ans);
                  break;
              }
              continue;
          }
          if(A[i] == A[i+1]){
              ans = Math.max(len+1,ans);
              len = 0;
              flag.up = -1;
              flag.down = -1;
              continue;
          }
          if(A[i]<A[i+1]){
              ans = Math.max(len+1,ans);
              len = 1;
              flag.up = 0;
              flag.down = -1;
              continue;
          }
      }
  }
  return ans
};

console.log(longestMountain([1,4,7,3,2,5]));