// 方法对象
const funcObj = {
	fb: (n) => {
		if (n === 1 || n === 2) {
			return 1;
		}
		return funcObj.fb(n - 1) + funcObj.fb(n - 2)
	}
}


// onmessage事件
onmessage = function (e) {
	const { data } = e;
	const res = funcObj[data.function](data.data)

	// 将获取的数据通过postMessage发送到主线程
	self.postMessage({
		data: res,
		name: 'worker test'
	})
	self.close()
}
