const pathToTree = (input) => {
  var output = [];
  for (var i = 0; i < input.length; i++) {
      var chain = input[i].split("/");
      var currentNode = output;
      for (var j = 0; j < chain.length; j++) {
          if (chain[j] === '') {
              break;
          }
          var wantedNode = chain[j];

          var lastNode = currentNode;

          for (var k = 0; k < currentNode.length; k++) {
              if (currentNode[k].title == wantedNode) {
                  currentNode = currentNode[k].children;
                  break;
              }
          }

          if (lastNode == currentNode) {
              var newNode = currentNode[k] = { key: input[i], title: wantedNode, children: [] };
              currentNode = newNode.children;
          } else {
              delete currentNode.children
          }
      }
  }
  return output;
}

var arr=[
  "root/",
  "root/a/",
  "root/a/new_b.png",
  "root/a/qa/",
  "root/a/qa/新建文本文档 (3).txt",
  "root/asdfasdfasdfasdfasdfasdfasdf.txt",
  "root/b.png",
  "root/instqj_gfzqhk.exe",
  "root/jupyter_notebook.png",
  "root/new_b.png",
  "root/output/new_b.png",
  "root/soffice.exe",
  "root/ti/asdfasdfasdfasdfasdfasdfasdf.txt",
  "root/watermark.zip",
  "root/中华人民共和国国民经济和社会发展 第十三个五年规划纲要 .pdf",
  "root/国务院发布《中国制造2025》%28全文%29.pdf",
  "root/新建文本文档 (3).txt",
  "root/新建文本文档.txt",
  "root/沧海一声笑.docx",
  "root/理光C2011SP.exe"
]

console.log(pathToTree(arr))