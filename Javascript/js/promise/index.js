
const run = [
	() => {
		function demo() {
			let pr = new Promise((resolve, reject) => {
				let flag = true;
				setTimeout(() => {
					flag = true;
				}, 500);
				if (flag)
					resolve("true")
				else
					reject("false")
			});
			return pr.then(res => {
				return "then return data"
			}).catch(res => {
				console.log('catch data:', res);
				return "data"
			});
		}

		demo().then(res => {
			console.log("show data:", res)
		})
	},
	() => {
		let p1 = new Promise((resolve, reject) => {
			resolve(11);
		})
		let p2 = new Promise(((resolve, reject) => {
			resolve(12);
		}))

		let p3 = new Promise(((resolve, reject) => {
			// resolve(13);
			reject(33)
		}))

		let p = Promise.all([p1, p2, p3]);
		p.then(res => {
			console.log('then', res);
		}).catch(res => {
			console.log("catch", res)
		});

	},
	() => {
		let p1 = new Promise((resolve, reject) => {
			resolve(11);
		})
		let p2 = new Promise(((resolve, reject) => {
			resolve(12);
		}))

		let p3 = new Promise(((resolve, reject) => {
			// resolve(13);
			reject(33)
		}))

		let p = Promise.race([p1, p2, p3]);
		p.then(res => {
			console.log('then', res);
		}).catch(res => {
			console.log("catch", res)
		}).finally(res => {
			console.log('finally', res);
		})
	},
	() => {
		const re = () => {
			let a = 1;
			const callback = () => {
				a = 2;
			}
			const log = () => {
				console.log('a:', a);
			}
			let p = new Promise(resolve => {
				resolve()
			});
			p.then(res => {
				callback();
			}).then(res => {
				log();
			})
		}
		console.log(re())
	}
]


run[run.length - 1]();