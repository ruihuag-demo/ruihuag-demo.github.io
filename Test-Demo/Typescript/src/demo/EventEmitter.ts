/*
 * @Author: ruihuag
 * @Date: 2021-09-07 14:55:11
 * @LastEditTime: 2021-09-07 16:13:50
 * @LastEditors: ruihuag
 * @Description:
 * @FilePath: \Typescript\src\demo\EventEmitter.ts
 */


// class EventEmitter {
// 	_event: any = {};

// 	// on 函数用于绑定
// 	// 注册事件监听; type 事件类型，handle 处理函数
// 	on(eventName: stirng, handle: any): void {
// 		let listeners: any = this._event[eventName];
// 		if (!listeners || !listeners.length) {
// 			this._event[eventName] = [handle];
// 			return;
// 		}
// 		listeners.push(handle);
// 	}
// 	// off 用于移除
// 	// 移除事件监听；type 事件类型，handle 处理函数
// 	off(eventName: any, handle: any): void {
// 		let listeners: any = this._event[eventName];
// 		this._event[eventName] = listeners.filter((l: any): boolean => l !== handle);
// 		// this._event[eventName]=[]
// 	}
// 	// emit 用于分发消息; // 触发一个事件
// 	emit(eventName: any, ...args: any[]): void {
// 		const listeners: any = this._event[eventName];
// 		if (listeners && listeners.length) {
// 			for (const l of listeners) {
// 				l(...args);
// 			}
// 		}
// 	}
// }
// const eventEmitter: EventEmitter = new EventEmitter()


// eventEmitter.on('a', 'aaa')
// eventEmitter.on('a', 'a2')
// eventEmitter.on('a', 'a3a')
// eventEmitter.on('a', 'a4a')
// eventEmitter.on('a', 'a5a')

// 节点

// 环形链表
class LinkedList {
	list: any = {}
	constructor(value: any) {
		this.list.value = value;
		this.list.previous = value;
		this.list.next = this.list.previous;
	}

	// find(): void { }
	insert(value: any): void {

		function findNextElem(elem: any): any {
			if (elem.previous === elem.next) return elem;
			if (elem.next === 'head') return elem;
			return elem.next;
		}
		const lastElem: any = findNextElem(this.list)
		let elememnt: any = {
			value,
		}
		lastElem.next = elememnt
		elememnt.previous = lastElem
		elememnt.next = 'head'

		// console.log('insert', lastElem)
		// this.previous = elem
		// this.next = elem
		// elem.next = this.elem
		// elem.previous = this.elem
	}
	// remove(): void { }
	// display(): void { }
	// displayReverse(): void { }
}

const list: any = new LinkedList('head')
list.insert('b')
// list.insert('c')
// list.insert('d')
// list.insert('e')
console.log(JSON.stringify(list, null, 2))






