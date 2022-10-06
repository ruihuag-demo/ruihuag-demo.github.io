/*
 * @Author: ruihuag
 * @Date: 2021-08-16 16:13:56
 * @LastEditTime: 2021-09-07 15:17:06
 * @LastEditors: ruihuag
 * @Description: 测试ts
 * @FilePath: \Typescript\src\index.ts
 */
// import { C, Greeter } from './demo/index'

// console.log(new C())
// interface Eg1 {
//   name: string,
//   readonly age: number,
// }
// // T1的类型实则是name | age
// type T1 = keyof Eg1
// 	type T11 = string | number

// class Eg2 {
//   private name: string;
//   public readonly age: number;
//   protected home: string;
// }
// // T2实则被约束为 age
// // 而name和home不是公有属性，所以不能被keyof获取到
// type T2 = keyof Eg2

// const obj: T1 = "name";
// const obj2: T11 = 123;

// interface T1 {
// 	name: string;
// }
// interface T2 {
// 	sex: number;
// }
// interface T3 extends T1, T2 {
// 	age: number;
// }

// type A = T1 & T2;

// const test: T3 = {
// 	name: 'grh',
// 	sex: 1,
// 	age: 123
// }
// let a: number = 123;
// console.log(test)
// // debugger;
// a = 456;
// console.log('123')
import typeRun from './type'
// const typeRun = require('./type')
typeRun()
