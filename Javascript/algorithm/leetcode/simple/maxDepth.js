/**
 104. 二叉树的最大深度
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */
function TreeNode(val){
    this.val = val;
    this.left = this.right =null;
}
function TreeNodeInit(root, i=null, arr=null){
    root.left = new TreeNode(arr[++i]);
    root.right = new TreeNode(arr[++i]);
}
function createTreeNode(arr){
    if(!arr) return null;
    let root = new TreeNode(arr[0]);
    let i = 0;
    TreeNodeInit(root, i, arr)
    TreeNodeInit(root.left, i+2, arr)
    TreeNodeInit(root.right, i, arr)
    return root
}


var maxDepth = function(root) {
    if(root === null) return 0;
    return 1 +  Math.max(maxDepth(root.left), maxDepth(root.right))
};

// console.log(maxDepth([3,9,20,null,null,15,7]));
console.log(createTreeNode([3,9,20,null,null,15,7]));