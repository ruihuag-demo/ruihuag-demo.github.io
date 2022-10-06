/*
 * @Author: ruihuag
 * @Date: 2021-09-03 23:35:28
 * @LastEditTime: 2021-09-04 01:37:34
 * @LastEditors: ruihuag
 * @Description:
 * @FilePath: \Typescript\src\demo\decorator.ts
 */
console.log('start----------------');
console.log("------------类装饰器-------------")
function logClz(param: any) {
	// 动态给class添加属性和function
	param.prototype.url = 'xxxx'
	param.prototype.run = function () {
		console.log('run...')
	}
	console.log(param)
}

@logClz
class HttpClient {
	constructor() { }
}

let http: any = new HttpClient()
http.run()


console.log('--------装饰器工厂--------');
function logClz2(param: string): any {
	console.log("params:", param)
	return function (target: any): any {
		console.log('target', target)
		target.prototype.url = param
	}
}

@logClz2('url22')
class HttpClient2 {
	constructor() { }
}

let http2: any = new HttpClient2()
console.log(http2.url)

console.log('---重载构造函数---')

function logClz3(target: any): any {
	return class extends target {
		url: string = 'change url'
		getData(): void {
			console.log('getData', this.url)
		}
	}

}

@logClz3
class HttpClient3 {
	public url: string | undefined
	constructor() {
		this.url = 'init url'
	}
	getData(): void {
		console.log(this.url);
	}
}

let http3: any = new HttpClient3()
http3.getData()

console.log('---修改类的定义---')

function fn<T extends { new(...args: any[]): {} }>(constructor: T): T {
	class Ps extends constructor {
		age: number = 20
	}
	return Ps
}

function fn2(v: number): any {
	return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
		return class Ps extends constructor {
			age: number = v
		}
	}
}
@fn
class Person { }
let p: any = new Person()// 装饰之后已经变为Ps
console.log(p.age) // 20

@fn2(123)
class Person2 { }
let p2: any = new Person2()// 装饰之后已经变为Ps
console.log(p2.age) // 123


console.log('---属性装饰器---');
function logProp(param: any): any {
	return function (target: any, attr: any): void {
		console.log('target', target);
		console.log('attr', attr);
		target[attr] = param
		target.api = "xxxx"
		target.run = function (): void {
			console.log('run.......')
		}
	}
}

class HttpClient4 {
	@logProp('htttp:123')
	public url: any | undefined
	// @logProp('htttp:123')
	// public api2: any | undefined
	constructor() { }
	getData(): void {
		console.log('url', this.url);
		// console.log('api2', this.api2);
	}
}

let http4: any = new HttpClient4()
http4.getData()
console.log(http4.api)
http4.run()

console.log('--------------方法装饰器------------------')
function get(params: any): any {
	console.log('---params---', params)  // 装饰器传入的参数：http://baidu.com
	return function (target: any, methodName: any, desc: any) {
		console.log(target)  // { constructor:f, getData:f } 
		console.log(methodName)  // getData
		console.log(desc)  // {value: ƒ, writable: true, enumerable: false, configurable: true} value就是方法体
		/* 修改被装饰的方法 */
		//1. 保存原方法体
		var oldMethod = desc.value;
		//2. 重新定义方法体
		desc.value = function (...args: any[]) {
			//3. 把传入的数组元素都转为字符串
			let newArgs = args.map((item) => {
				return String(item);
			});
			//4. 执行原来的方法体
			oldMethod.apply(this, newArgs);
			// 等效于 oldMethod.call(this, ...newArgs);
		}
	}
}
class HttpClient5 {
	constructor() { }
	@get('http://baidu.com')
	getData(...args: any[]) {
		console.log('getData: ', args);
	}
}
let http5 = new HttpClient5()
http5.getData(1, 2, true);  // getData: ["1", "2", "true"]

console.log('------方法参数装饰器------')

function logParams6(params: any) {
	console.log(params)  // 装饰器传入的参数：uuid
	// console.log(this)

	return function (target: any, methodName: any, paramIndex: any) {
		console.log(target)  // { constructor:f, getData:f } 
		console.log(methodName)  // getData
		console.log(paramIndex)  // 0
		// console.log(this)
		// target[methodName].apply(this, params + "sss")
		target[methodName](params)
	}
}
class HttpClient6 {
	constructor() { }
	getData(@logParams6('uuid') uuid: any) {
		console.log(uuid);
	}
}
let http6: any = new HttpClient6()
http6.getData(142857)


console.log('------装饰器的执行顺序------')
function logClz11(params: string) {
	return function (target: any) {
		console.log('logClz11')
	}
}
function logClz22(params?: string) {
	return function (target: any) {
		console.log('logClz22')
	}
}
function logAttr(params?: string) {
	return function (target: any, attrName: any) {
		console.log('logAttr')
	}
}
function logMethod(params?: string) {
	return function (target: any, methodName: any, desc: any) {
		console.log('logMethod')
	}
}
function logParam11(params?: any) {
	return function (target: any, methodName: any, paramIndex: any) {
		console.log('logParam11')
	}
}
function logParam22(params?: any) {
	return function (target: any, methodName: any, paramIndex: any) {
		console.log('logParam22')
	}
}

@logClz11('http://baidu.com')
@logClz22()
class HttpClient7 {
	@logAttr()
	public url: string | undefined;

	constructor() { }

	@logMethod()
	getData() {
		console.log('get data');
	}

	setData(@logParam11() param1: any, @logParam22() param2: any) {
		console.log('set data');
	}
}
// logAttr --> logMethod --> logParam22 --> logParam11 --> logClz22 --> logClz11

console.log('ending----------')
console.log('');