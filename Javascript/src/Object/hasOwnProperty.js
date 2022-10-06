//=========================================
// hasOwnProperty: 返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键)
//=========================================

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false