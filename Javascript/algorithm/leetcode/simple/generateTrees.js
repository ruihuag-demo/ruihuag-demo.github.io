/**
 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
示例：

输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 * @param {*} val 
 * @param {*} left 
 * @param {*} right 
 */

/**
 * function buildTree(start, end) {
    let ans = [];
    if (start > end) return [null];
    for (let i = start; i <= end; i++) {
      let leftNodes = buildTree(start, i - 1);
      let rightNodes = buildTree(i + 1, end);
      for (const leftNode of leftNodes) {
        for (const rightNode of rightNodes) {
          let cur = new TreeNode(i);
          cur.left = leftNode;
          cur.right = rightNode;
          ans.push(cur);
        }
      }
    }
    return ans;
  }
  if (n === 0) return [];
  return buildTree(1, n);
 * @param {*} val 
 * @param {*} left 
 * @param {*} right 
 */
//二叉搜索树特点:左节点<根节点<右节点
function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var generateTrees = function(n){
    function buildTree(start, end) {
        let ans = [];
        if (start > end) return [null];
        for (let i = start; i <= end; i++) {
          let leftNodes = buildTree(start, i - 1);
          let rightNodes = buildTree(i + 1, end);
          for (const leftNode of leftNodes) {
            for (const rightNode of rightNodes) {
              let cur = new TreeNode(i);
              cur.left = leftNode;
              cur.right = rightNode;
              ans.push(cur);
            }
          }
        }
        return ans;
      }
      if (n === 0) return [];
      return buildTree(1, n);
};

console.log(generateTrees(3))