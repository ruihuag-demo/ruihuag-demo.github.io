const data = require('./data')
console.log('------------')
// console.log(data.data.filter((item, index) => index < 2))

let needFilterData = data.data.filter((item, index) => index < 15).map(item => {
	const { code, cateName } = item;
	return {
		code, cateName
	}
})

function filter(params) {
	let regObj = {};
	for (let key in params) {
		regObj[key] = new RegExp(params[key], 'gi')
	}
	return needFilterData.filter(item => {
		let flag = true;
		for (let key in regObj) {
			if (!regObj[key].test(item[key])) flag = false;
		}
		return flag
	})
}


// console.log(needFilterData)
console.log(filter({ code: "re", cateName: '' }))
console.log(filter({ code: "re", cateName: undefined }))

const regex = new RegExp('foo', 'gi');
console.log(regex.test('foooooo'))