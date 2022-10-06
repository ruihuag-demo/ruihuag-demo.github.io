// Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变

const object1 = {
	property1: 42,
};

Object.defineProperties(object1, {
	property2: {
		value: 1200
	}
})

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33


console.log(object1.property2)