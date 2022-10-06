/*
 * File: 策略模式.ts
 * Project: 行为型
 * Author: ruihuag
 * File Created: Wednesday, 11th August 2021 4:13:18 pm
 * Modified By: ruihuag
 * Last Modified: Wednesday, 11th August 2021 5:01:05 pm
 */

// 抽象策略接口类
interface IStrategy{
	strategyMethod: ()=>void; // 策略方法
}


// 抽象策略类(由于ts无法实例化接口而添加)
class Strategy implements IStrategy{
	public strategyMethod():void {
		console.log('抽象策略类方法 被访问');
	}
} 

// 具体策略类A
class ContextStrategyA implements IStrategy{
	public strategyMethod(){
		console.log('具体策略类A的策略方法 被访问');
	}
}

// 具体策略类B
class ContextStrategyB implements IStrategy{
	public strategyMethod(){
		console.log('具体策略类B的策略方法 被访问');
	}
}

// 具体策略类B



// 环境类
class Context {
	private stategy = new Strategy();
	public getStrategy():IStrategy {
		return this.stategy;
	}
	public setStategy(stategy:IStrategy ):void{
		this.stategy = stategy;
	}
	public stategyMethod() {
		this.stategy.strategyMethod();
	}
}


// 主函数
const a:IStrategy = new ContextStrategyA();
const b:IStrategy = new ContextStrategyB();
const context: Context = new Context();

context.setStategy(a);
context.stategyMethod();

context.setStategy(b);
context.stategyMethod();