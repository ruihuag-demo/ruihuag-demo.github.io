/*
 * @Author: ruihuag
 * @Date: 2021-08-16 11:05:31
 * @LastEditTime: 2021-08-16 11:26:12
 * @LastEditors: ruihuag
 * @Description: 桥接模式
 * @FilePath: \Design pattern\结构型\桥接模式\index.ts
 */

{

//实现化角色
interface Implementor {
    OperationImpl():void;
}
	
//具体实现化角色
class ConcreteImplementorA implements Implementor {
    public OperationImpl():void {
        console.log("具体实现化(Concrete Implementor)角色被访问");
    }
}

//抽象化角色
abstract class Abstraction {
		protected imple: Implementor | null = null;

    protected Abstraction(imple:Implementor) {
        this.imple = imple;
    }

    public abstract Operation():void;
}

//扩展抽象化角色
	class RefinedAbstraction extends Abstraction {
		protected imple: Implementor | null = null;
    constructor(imple:Implementor) {
			super();
			this.imple = imple;
    }

    public Operation():void {
				console.log("扩展抽象化(Refined Abstraction)角色被访问");
        this.imple?.OperationImpl();
    }
}

// 相当于 RefinedAbstraction 拥有了 Implementor 的方法等


const imple:Implementor = new ConcreteImplementorA();
const abs:Abstraction = new RefinedAbstraction(imple);
abs.Operation();

}
