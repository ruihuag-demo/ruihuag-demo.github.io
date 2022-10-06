/*
 * @Author: ruihuag
 * @Date: 2021-08-18 17:39:10
 * @LastEditTime: 2021-09-03 23:35:32
 * @LastEditors: ruihuag
 * @Description: ts 内置类型工具
 * @FilePath: \Typescript\src\demo\index.ts
 */

// console.log('demo 1 ');

function f() {
	console.log("f(): evaluated");
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
		console.log("f(): called");
	}
}

function g() {

	console.log("g(): evaluated");
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
		console.log("g(): called");
	}
}

class C {
	@f()
	@g()
	method() { }
}

// function select(construtor: Function) {
// 	Object.seal(construtor)
// 	Object.seal(construtor.prototype)
// }

// @sealed
class Greeter {
	greeting: String;
	greet() {
		return "Hello, " + this.greeting
	}
}





export {
	C,
	Greeter
}
