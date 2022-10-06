/**
    329. 矩阵中的最长递增路径//补充下一个节点的数要比本节点大
给定一个整数矩阵，找出最长递增路径的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

示例 1:

输入: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
输出: 4 
解释: 最长递增路径为 [1, 2, 6, 9]。
示例 2:

输入: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
输出: 4 
解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 */

 /**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let row = matrix.length;
    let colum = matrix[0] ? matrix[0].length : 0
    let result = 0;
    if(row === 0 || colum === 0) return result;
    let dp = Array.from({length: row}, ()=> Array(colum).fill(0));
    for(let  i =0 ; i < row ; i++){
        for(let j = 0; j < colum; j++){
            result = Math.max(result, dfs(i, j));
        }
    }
    function dfs(r ,c){
        if(dp[r][c]) return dp[r][c]
        dp[r][c] = 1;
        if (c - 1 >= 0 && matrix[r][c - 1] > matrix[r][c])
        dp[r][c] = Math.max(dp[r][c], dfs(r, c - 1) + 1)
        if (c + 1 < colum && matrix[r][c + 1] > matrix[r][c])
        dp[r][c] = Math.max(dp[r][c], dfs(r, c + 1) + 1)
        if (r - 1 >= 0 && matrix[r - 1][c] > matrix[r][c])
        dp[r][c] = Math.max(dp[r][c], dfs(r - 1, c) + 1)
        if (r + 1 < row && matrix[r + 1][c] > matrix[r][c])
        dp[r][c] = Math.max(dp[r][c], dfs(r + 1, c) + 1)
        return dp[r][c]
    }
    
    return result;
};

console.log(longestIncreasingPath([
    [9,9,4],
    [6,6,8],
    [2,1,1]
  ] ));