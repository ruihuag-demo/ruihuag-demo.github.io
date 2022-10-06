/*
 * @Author: ruihuag
 * @Date: 2021-08-24 23:57:54
 * @LastEditTime: 2021-08-25 00:19:07
 * @LastEditors: ruihuag
 * @Description: 测试
 * @FilePath: \Test-Demo\Design pattern\行为型\观察者(发布-订阅)模式\event.ts
 */
{

	interface anyObj {
		[key: string]: any;
	}

	// 通用类型基础类型
	type TBase = string | number | boolean | undefined | anyObj;
	type IHandle = TBase;
	interface IEvent {
		[name: string]: any;
	}

	// // 发布订阅类(使用环形链表)
	class EventEmitter {
		_event:IEvent = {};

		// on 函数用于绑定
	// 	// 注册事件监听; type 事件类型，handle 处理函数
		on(eventName:string, handle:IHandle) {
			let listeners = this._event.eventName
			if (!listeners || !listeners.length) {
				this._event[eventName] = [handle];
				return;
			}
			listeners.push(handle);
		}

	// 	// off 用于移除
	// 	// 移除事件监听；type 事件类型，handle 处理函数
		off(eventName:string, handle:IHandle) {
			let listeners = this._event[eventName];
			this._event[eventName] = listeners.filter((l:IHandle) => l !== handle);
		}

		// emit 用于分发消息; // 触发一个事件
		emit(eventName:string, ...args:any) {
			const listeners = this._event[eventName];
			if (listeners && listeners.length) {
				for (const l of listeners) {
					l(...args);
				}
			}
		}
	}

	const event: EventEmitter = new EventEmitter();
	event.on('aa', () => console.log('aa'))
	event.emit('aa')
	console.log(event)
}