
let arr = [
	() => {
		let arr = [];
		function fn(k) {
			if (k <= 0) return;
			for (let i = 0; i < 2; i++) {
				arr.push(i);
				fn(--k);
			}
		}
		fn(3);
		console.log(arr.length)
	},
	() => {
		let arr = [];
		function fn(k) {
			if (k <= 0) return;
			for (let i = 0; i < 2; i++) {
				arr.push(i);
				fn(--k);
			}
		}
		fn(3);
		console.log(arr.length)
	}
]
arr[arr.length - 1]();