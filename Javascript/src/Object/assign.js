const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const obj = Object.create({ foo: 1 }, { // foo 是个继承属性。
	bar: {
		value: 2,  // bar 是个不可枚举属性。
		// enumerable: true,
	},
	baz: {
		value: 3,
		enumerable: true  // baz 是个自身可枚举属性。
	}
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
