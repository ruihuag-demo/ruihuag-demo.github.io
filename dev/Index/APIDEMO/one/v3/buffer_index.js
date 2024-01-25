let bf  = Buffer.from('10');
console.log(bf)
console.log(bf.toString())

//初始化缓冲区
//保证新创建的缓存区数据不会包括旧数据
let bf2 = Buffer.alloc(10);
console.log(bf2);

//不会重置数据,不安全,需要谨慎使用
let bf3 = Buffer.allocUnsafe(10);
console.log(bf3)

bf3[0] = 3;
console.log(bf3)
console.log(bf3[0].toString())
