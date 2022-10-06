var foo = { a: 1 }
var bar = { a: 1 }
console.log(
	Object.is('foo', 'foo'),     // true
	Object.is('foo', 'bar'),     // false
	Object.is([], []),           // false
	Object.is(foo, foo),         // true
	Object.is(foo, bar),         // false
	Object.is(null, null),       // true
	Object.is(0, -0),            // false
	Object.is(0, +0),            // true
	Object.is(-0, -0),           // true
	Object.is(NaN, 0 / 0),         // true
)