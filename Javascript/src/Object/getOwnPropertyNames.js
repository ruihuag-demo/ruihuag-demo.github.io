//=========================================
// 获取自身全部属性的字符串( 包括可枚举 和 不可枚举的 )

const object1 = {
	property1: 42,
	property2: {
		a: 123,
		b: 345,
	}
};

console.log(Object.getOwnPropertyNames(object1));


let arr = ["a", "b", "c"];

console.log(Object.getOwnPropertyNames(arr))
