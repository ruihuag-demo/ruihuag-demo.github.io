let arr = [
	'https://arpe1.accessreal.com/q?u=RY8eXNn3srYG',
	'http://a.axr.to/lYtbOz'
]


// console.log(arr[0].match(eval(`/${"https"}/`)))

// var regex = /('http'||'https')/;

// console.log(regex.test(arr[0]))
let patter = new RegExp("/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/", "g")
console.log(patter.exec(arr[0]))



const match = (str) => {
	let result = "";
	let flag = 3;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "/") flag--;
		result += str[i];
		if (flag === 0) break;
	}
	return result;
}
// console.log(match(arr[0]))
// console.log(match(arr[1]))

