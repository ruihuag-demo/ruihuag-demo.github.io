// 返回指定对象上一个自有属性对应的属性描述符
const object1 = {
	property1: 42,
	property2: {
		a: 123,
		b: 345,
	}
};

const descriptor1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptor1.property1);
console.log(descriptor1.property2);