https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
var obj = {};
Object.defineProperties(obj, {
	'property1': {
		value: true,
		configurable: true,
		enumerable: true,
		writable: true
	},
	'property2': {
		value: 'Hello',
		writable: false
	}
	// etc. etc.
});

console.log('obj', obj.property1);
console.log('obj', obj.property2);
console.log('obj', obj); // 看不到 property2