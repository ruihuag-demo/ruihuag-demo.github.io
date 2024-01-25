var fs = require('fs')
// 同步执行,阻塞态执行
// 同步打开文件
let fd = fs.openSync('text1.html', 'w')
console.log(fd);
//写入内容
let str = "guanruihua"
fs.writeFileSync(fd,str);
//退出文件
fs.closeSync(fd)