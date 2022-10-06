function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 200);
	});
}

function rejectFn() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('reject')
			// reject('reject')
		}, 200)
	})
}


async function asyncCall() {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	const resJect = await rejectFn();
	console.log(result);
	console.log(resJect, '---resJect---')
	// expected output: "resolved"
}

asyncCall();

console.log('------------')

function* idMaker() {
	let index = 0;
	while (true)
		yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
// 2
// ...