/**
 * 将树形数据列表做成做开结构
 * @param {Array.of(object)} objList 树形数据列表，树形数据对象包含一个 id 和一个 parent id;
 * @param {string} rootId 查找的根结点 id, undefined 时，自动查找根结点(即，没有上级结点的都为根结点)
 */
const f_makeTree = (objList, rootId)=>{
  let outTreeObjs = [];
  let otherObjs = [];
  if(objList instanceof Array){
    if(rootId === undefined){
      // 找出所有根结点；
      objList.forEach(item=>{
        if(objList.findIndex(cObj=>cObj.id == item.parentId) == -1){
          // 没有找到 item 的上结节点，则 item 做为根结点
          outTreeObjs.push(item);
        }else{
          otherObjs.push(item);
        }
      });
      // 递归给子节点找子结点；
      outTreeObjs.forEach(item=>{
        item.children = f_makeTree(otherObjs, item.id);
        if(item.children && item.children.length < 1){
          item.children = undefined;
        }
      });
    }else{
      // 找到子结点
      outTreeObjs = objList.filter(item=>{ return (f_isEmpty(item.parentId) && rootId === null) || (item.parentId == rootId) });
      // 找到 其他结点
      // otherObjs = objList.filter(item=>{ return !((f_isEmpty(item.parentId) && rootId === null) || (item.parentId == rootId)) });
      
      // 递归给子节点找子结点；
      outTreeObjs.forEach(item=>{
        item.children = f_makeTree(objList, item.id);
        if(item.children && item.children.length < 1){
          item.children = undefined;
        }
      });
    }
  }
  return outTreeObjs;
}

