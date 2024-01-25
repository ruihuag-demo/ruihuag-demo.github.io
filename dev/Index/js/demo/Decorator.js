{
	function fn(name) {
		console.log(`Hello, ${name}`)
	}
	
	function decorator(fn) {
		return function() {
			console.log('Starting')
			const result = fn.apply(this, arguments)
			console.log('Finished')
	
			return result
		}
	}
	
	const wrapped = decorator(fn)
	
	fn('grh')
	
	wrapped('ruihua');
}

{
	// @log
	// @immutable
	// class Example {
	// 	@observable price = 0
	// 	@observable amount = 1

	// 	constructor(price) {
	// 		this.price = price
	// 	}

	// 	@computed get total() {
	// 		return this.price * this.amount;
	// 	}
	// }
	// console.log(Example.price)
}