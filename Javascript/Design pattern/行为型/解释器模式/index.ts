/*
 * @Author: ruihuag
 * @Date: 2021-08-13 10:06:16
 * @LastEditTime: 2021-08-13 10:52:05
 * @LastEditors: ruihuag
 * @Description: 解释器模式
 * @FilePath: \Test-Demo\Design pattern\行为型\解释器模式\index.ts
 * Copyright (c) 2004-2021 i-Sprint Technologies, Inc.
 *  address: 
 *  All rights reserved. 
 *  
 *  This software is the confidential and proprietary information of 
 *  i-Sprint Technologies, Inc. ('Confidential Information').  You shall not 
 *  disclose such Confidential Information and shall use it only in 
 *  accordance with the terms of the license agreement you entered into 
 *  with i-Sprint. 
 */
interface IExpression{
	interpret: (context:string) => boolean;
}
type TExpression = IExpression | null;

class Expression implements IExpression{
	interpret(context:string):boolean {
		console.log('expression')
		return true;
	}
}

class TerminalExpression implements IExpression{
	private data: string = '';
	public interpret(context:string):boolean {
		// console.log('TerminalExpression interpret')
		return context === this.data
	}
	constructor(data:string) {
		this.data = data;
	}
}
class OrExpresssion implements IExpression{
	private expr1: TExpression = null;
	private expr2: TExpression = null;
	constructor(expr1:TExpression, expr2:TExpression) {
		this.expr1 = expr1;
		this.expr2 = expr2;
	}
	public interpret(context: string): boolean {
		// console.log('OrExpresssion interpret')
		return (this.expr1?.interpret(context) || this.expr2?.interpret(context)) ? true : false;
	}
	

}
class AndExpresssion implements IExpression{
	private expr1: TExpression = null;
	private expr2: TExpression = null;
	public interpret(context:string):boolean {
		// console.log('AndExpression interpret')
		// return true;
		return (this.expr1?.interpret(context) && this.expr2?.interpret(context)) ? true : false;
	}
	
	constructor(expr1:TExpression, expr2:TExpression) {
		this.expr1 = expr1;
		this.expr2 = expr2;
	}
}


// 开始测试

const getMaleExpression=():OrExpresssion=>{
	let rebert:TExpression = new TerminalExpression('Robert');
	let john: TExpression = new TerminalExpression('John');
	return new OrExpresssion(rebert, john)
}
const getMarriedWomanExpression=():AndExpresssion=>{
	let julie:TExpression = new TerminalExpression('Julie');
	let married: TExpression = new TerminalExpression('Married');
	return new AndExpresssion(julie, married)
}


const isMale = getMaleExpression();
const isMarriedWoman = getMarriedWomanExpression();
console.log('John is male?', isMale.interpret("John"))
console.log("Julie is a married women? ", isMarriedWoman.interpret("Married Julie"));


