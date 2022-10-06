/*
 * @Author: ruihuag
 * @Date: 2021-08-13 09:40:08
 * @LastEditTime: 2021-08-13 10:04:37
 * @LastEditors: ruihuag
 * @Description: 设计模式测试
 * @FilePath: \Test-Demo\Design pattern\行为型\观察者(发布-订阅)模式\发布订阅.js
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

// 发布订阅类
class EventEmitter {
	_event = {}

	// on 函数用于绑定
	// 注册事件监听; type 事件类型，handle 处理函数
	on(eventName, handle) {
		let listeners = this._event[eventName];
		if (!listeners || !listeners.length) {
			this._event[eventName] = [handle];
			return;
		}
		listeners.push(handle);
	}
	// off 用于移除
	// 移除事件监听；type 事件类型，handle 处理函数
	off(eventName, handle) {
		let listeners = this._event[eventName];
		this._event[eventName] = listeners.filter(l => l !== handle);
	}
	// emit 用于分发消息; // 触发一个事件
	emit(eventName, ...args) {
		const listeners = this._event[eventName];
		if (listeners && listeners.length) {
			for (const l of listeners) {
				l(...args);
			}
		}
		this.log()
	}
	log() {
		console.log(JSON.stringify(this._event, null, 2));
		// console.log('-----------------------')
	}
}
const mEvent = new EventEmitter();

const a = () => { console.log('aaa'); return 'aa'; }
const b = () => console.log('b')
const c = () => console.log('c')


mEvent.on('a', a)
// mEvent.off('a', a)
mEvent.on('b', b)
mEvent.on('c', c)


mEvent.emit('a');