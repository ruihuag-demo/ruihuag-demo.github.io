/*
 * File: 迭代器模式.ts
 * Project: 行为型
 * Author: ruihuag
 * File Created: Wednesday, 11th August 2021 4:42:18 pm
 * Modified By: ruihuag
 * Last Modified: Wednesday, 11th August 2021 5:45:36 pm
 */
type TObject = Object | undefined | null | string;

// 抽象迭代器
interface IIterator{
	first: () => TObject;
	next: () => TObject;
	hasNext: () => boolean;
}


// 具体迭代器
class ConcreteIterator implements IIterator{
	private list: TObject[] = [];
	private index: number = -1;
	public constructor(list:Array<TObject>) {
		this.list = list;
	}
	public first(): TObject {
		return this.list[0];
	}
	public next(): TObject {
		return this.list[++this.index]
	}
	public hasNext(): boolean{
		return this.index<this.list.length-1;
	}
}

// 抽象聚合接口
interface IAggregate{
	add: (obj:TObject) => void;
	remove: (obj:TObject) => void;
	getIterator: () => IIterator;
}

// 抽象聚合类
class Aggregate{
	public add(obj:TObject):void{ };
	public remove(obj:TObject): void { };
	public getIterator(): IIterator {
		return new ConcreteIterator(new Array());
	};
}

// 具体聚合
class ConcreteAggregate implements IAggregate{
	private list: TObject[] = [];
	public add(obj:TObject):void{
		this.list.push(obj)
	};
	public remove(obj:TObject): void {
		this.list = this.list.map(item => {
			if (item === obj) return;
			return item;
		}).filter(i => i);
	};
	public getIterator(): IIterator {
		return new ConcreteIterator(this.list)
	};
}


const ag: IAggregate = new ConcreteAggregate();
ag.add("111");
ag.add("222");
ag.add("333");
const it:IIterator = ag.getIterator();
while (it.hasNext()) {
	console.log(it.next());
}