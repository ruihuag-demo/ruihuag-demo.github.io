//-----------------------------------------
// 返回指定对象的原型（内部[[Prototype]]属性的值）
//-----------------------------------------

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true