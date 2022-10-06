const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
	constructor(executor) {
		executor(this.resolve, this.reject);
	}

	status = PENDING; // 状态
	value = undefined; // then函数成功回调需要的参数
	reason = undefined; // then函数失败回调需要的参数

	resolve = value => {
		// 如果状态不是等待 阻止程序向下执行
		if (this.status !== PENDING) return;
		// 将状态更改为成功
		this.status = FULFILLED;
		// 保存成功之后的值
		this.value = value;
	}

	reject = reason => {
		// 如果状态不是等待 阻止程序向下执行
		if (this.status !== PENDING) return;
		// 将状态更改为失败
		this.status = REJECTED;
		// 保存失败后的原因
		this.reason = reason;
	}

	then = (successCallback, failCallback) => {
		// 判断状态
		if (this.status === FULFILLED) {
			successCallback(this.value);
		} else if (this.status === REJECTED) {
			failCallback(this.reason);
		}
	}
}

module.exports = MyPromise;