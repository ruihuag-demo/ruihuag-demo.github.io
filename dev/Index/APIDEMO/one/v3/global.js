console.log("当前执行脚本的文件名称",__filename)
console.log("当前正在执行脚本的目录名称",__dirname)

let path = require('path')
let strPath = 'D:/Project/api/v3/logo.png'
//获取拓展名
console.log(path.extname(strPath))
console.log(path.extname(__filename))
//获取文件名称
console.log(path.basename(strPath))
console.log(path.basename(__filename))
//获取目录名称
console.log(path.dirname(strPath))
console.log(path.dirname(__filename))

//路径解析和规范化路径
console.log(path.normalize(strPath))

//路径合并
console.log(path.join(__dirname+'/abc.png'))

//获取绝对路径的合并
console.log(path.resolve(__dirname+'/abc.png'))