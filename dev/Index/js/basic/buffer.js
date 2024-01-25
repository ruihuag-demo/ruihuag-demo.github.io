const buf8 = new Uint8Array();
const buf16 = new Uint16Array();
const buf32 = new Uint32Array();
console.log(buf8.BYTES_PER_ELEMENT); // 1
console.log(buf16.BYTES_PER_ELEMENT); // 2
console.log(buf32.BYTES_PER_ELEMENT); // 4

/**
    Int8Array：8位有符号整数，长度1个字节。
    Uint8Array：8位无符号整数，长度1个字节。
    Int16Array：16位有符号整数，长度2个字节。
    Uint16Array：16位无符号整数，长度2个字节。
    Int32Array：32位有符号整数，长度4个字节。
    Uint32Array：32位无符号整数，长度4个字节。
    Float32Array：32位浮点数，长度4个字节。
    Float64Array：64位浮点数，长度8个字节。
 */

var bf = new ArrayBuffer(40); // 生成了字节长度为40的内存区域
//通过提供的 byteLength 属性返回分配字节的长k度
console.log(bf.byteLength);  // 40
/*
    值得注意的是如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。
*/
