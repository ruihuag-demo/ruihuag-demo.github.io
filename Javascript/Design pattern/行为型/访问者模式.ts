/*
 * File: 访问者模式.ts
 * Project: 行为型
 * Author: ruihuag
 * File Created: Wednesday, 11th August 2021 5:47:09 pm
 * Modified By: ruihuag
 * Last Modified: Wednesday, 11th August 2021 5:57:31 pm
 */
{	
// 	// 抽象访问者
// 	abstract class Visitor {
// 		abstract visit(element: ConcreteElementA): void;
// 		abstract visit(element: ConcreteElementB): void;
// 	}
	
	
// 	//抽象元素类
// 	abstract class CElement {
// 		abstract accept(visitor:Visitor):void;
// 	}
	
// 	class ConcreteElementA implements CElement{
// 		accept(visitor: Visitor):void {
// 			visitor.visit(this)
// 		}
// 		public operationA():string {
// 			return "concrete A";
// 		}
// 	}
// 	class ConcreteElementB{
// 		accept(visitor: Visitor):void {
// 			visitor.visit(this)
// 		}
// 		public operationB():string {
// 			return "concrete B";
// 		}
// 	}
	
// 	//具体访问者A类
// class ConcreteVisitorA implements Visitor {
//     visit(element:ConcreteElementA):void {
//         console.log("具体访问者A访问-->" + element.operationA());
//     }

//     visit(element:ConcreteElementB):void {
//         console.log("具体访问者A访问-->" + element.operationB());
//     }
// }

// //具体访问者B类
// class ConcreteVisitorB implements Visitor {
//     public void visit(ConcreteElementA element) {
//         System.out.println("具体访问者B访问-->" + element.operationA());
//     }

//     public void visit(ConcreteElementB element) {
//         System.out.println("具体访问者B访问-->" + element.operationB());
//     }
// }
	
	
// 	// 对象结构角色
// 	class ObjectStructure{
// 		private list: CElement[] = [];
// 		public accept(visitor: Visitor): void{
// 			this.list.map(item => {
// 				item.accept(visitor);
// 			})
// 		}
// 		public add(element: CElement) {
// 			this.list.push(element)
// 		}
// 		public remove(elemnt: CElement) {
// 			// 移除 list 一项
// 		}
// 	}


}
{
	class Visitor {
		visitStr(str: string) {
			console.log(str)
		}
		visitNum(num: number) {
			console.log(num)
		}
		visit(obj: any): void {
			// console.log(typeof obj)
			if (typeof obj === 'number') this.visitNum(obj)
			if (typeof obj === 'string') this.visitStr(obj)

		}

	}

	let n: number = 123;
	let s: string = '123str';
	const v = new Visitor();
	v.visit(n)
	v.visit(s)
}

