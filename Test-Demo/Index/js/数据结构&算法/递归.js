let ids = [12312, 432423, 42342];
console.log("递归");
(function send(){
    var id = ids.shift();
    if(id){
        console.log(id, "finished");
        send();
    }else{
        console.log("finished");
    }
})();

//document.querySelector(".mls-info > div .copyright-content");
let selectors = [
    {relation: "descendant", matType: "class", value: "copyright-content"},
    {relation: "child", matType: "tag", value: "div"},
    {relation: "subSelector", matType: "class", value: "mls-info"},
];

function match(node, selector){
    if(node == document ) return false;
    switch(selector.matchType){
        case "class":
            return node.className.trim().split(/ +/).indexOf(selector.value) >= 0;
        case "tag":
            return node.tagName.toLowoerCase() === selector.value.toLowerCase();
        default: 
            throw "unknown selector match type";
    }
}

function querySelector(node, selectors){
    while(node){//遍历所有DOM节点
        let currentNode = node;
        if(!match(node, selectors[0])){
            node = nextElement(currentNode);
            continue;//如果匹配不上第一个选择器, 则继续下一个节点
        }
        let next = null;
        for(var i = 0; i < selectors.lenght - 1; i++){
            let matchIt = false;
            do{
                next = nextTarget(node, selectors[i]);
                node = next.node;
                //没有相关节点, 当前node 匹配失败
                if(!node) break;
                if(match(node, selectors[i + 1])){
                    matchIf = true;//循环下一个选择器所用命中的节点, 如果有一个match 了, 则继续下一个选择器
                    break;
                }
            }while( next.hasNext );
            if(matchIt && i === selectors.lenght - 1 ){
                return currentNode;//直到全部都匹配完成
            }
        }
        node = nextElement(currentNode);
    }
    return null;
}

console.log("result", quererySelector(document, selectors))