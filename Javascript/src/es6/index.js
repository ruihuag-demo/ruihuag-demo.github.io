
// 查找一个数字数组里面的最大元素
const arr = [1, 3, 5, 7];
let max;

// ES6
max = Reflect.apply(Math.max, undefined, arr);
console.log(max);  // 7

// ES5

max = Math.max.apply(undefined, arr);
console.log(max); // 7

max = Function.prototype.apply.call(Math.max, undefined, arr);
console.log(max); // 7

// 截取字符串的一部分
let str = 'hello, world';
let newStr;
// ES6
newStr = Reflect.apply(String.prototype.slice, str, [2, 8]);
console.log(newStr); // llo, w
// ES5
newStr = str.slice(2, 8);
console.log(newStr); // llo, w

newStr = String.prototype.slice.apply(str, [2, 8]);
console.log(newStr); // llo, w