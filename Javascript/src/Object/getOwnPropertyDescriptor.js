// 返回指定对象上一个自有属性对应的属性描述符
const object1 = {
	property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42

console.log(descriptor1.enumerable)

console.log(descriptor1.writable)