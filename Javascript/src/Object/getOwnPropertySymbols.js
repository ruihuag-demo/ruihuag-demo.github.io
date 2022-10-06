//=========================================
// 返回一个给定对象自身的所有 Symbol 属性的数组	。
let obj = {};
let a = Symbol("a");
let b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

let objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
