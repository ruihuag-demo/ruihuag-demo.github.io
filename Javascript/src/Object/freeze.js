const obj = {
	prop: 42,
	props: {
		a: 123,
		b: 456
	}
};

Object.freeze(obj); // 冻结对象, 不可修改

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

obj.prop.a = 111
console.log(obj.props)