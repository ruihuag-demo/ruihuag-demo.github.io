/**
 64. 最小路径和
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
示例:
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
 */

 var minPathSum = function(grid){
  let m = grid.length;
  let n = grid[0].length;
  let op = Array.from(new Array(m), ()=>new Array(n));
  op[0][0] = grid[0][0];
  for(let i =1 ;i < m; i++){
    op[i][0] = grid[i][0];
    op[i][0] += op[i-1][0];
  }
  for(let i =1 ;i < n; i++){
    op[0][i] = grid[0][i];
    op[0][i] += op[0][i-1];
  }
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      op[i][j] = grid[i][j];
      op[i][j] += (op[i-1][j]-op[i][j-1])>0 ? op[i][j-1]:op[i-1][j];
    }
  } 
  return op[m-1][n-1];
 }

 
 var minPathSum2 = function(grid){
  let m = grid.length;
  let n = grid[0].length;
  let op = Array.from(grid);
  for(let i =1 ;i < m; i++){
    op[i][0] += op[i-1][0];
  }
  for(let i =1 ;i < n; i++){
    op[0][i] += op[0][i-1];
  }
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      op[i][j] += (op[i-1][j]-op[i][j-1])>0 ? op[i][j-1]:op[i-1][j];
    }
  } 
  return op[m-1][n-1];
 }


 console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [1,5,1],
    [4,2,1]
  ]))
  console.log(minPathSum2([
    [1,3,1],
    [1,5,1],
    [1,5,1],
    [4,2,1]
  ]))
