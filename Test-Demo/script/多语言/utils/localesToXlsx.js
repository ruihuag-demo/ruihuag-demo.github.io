const xlsx = require("node-xlsx");
const fs = require('fs');

function handleData(config) {
	const { path, dataIndex } = config;
	const { addHeader, colPatt, patt = {} } = config.format || {}
	let result = []
	let resultIndex = 0;
	if (addHeader) {
		result.push(addHeader)
		resultIndex = 1;
	}
	for (let key in dataIndex) {
		const [keyA, keyB] = dataIndex[key]
		let tempPatt = colPatt;
		if (patt[key]) tempPatt = patt[key];
		let item = fs
			.readFileSync(`${path}${dataIndex[key][2]}`, 'utf-8').match(tempPatt) || []
		item = item.map(j => j
			.split(/:\s*/)
			.map(it =>
				it.replace(/^\"|^\t|\"$/g, '')
			))

		item.forEach((it, index) => {
			const [valA, valB] = it
			let tempIndex = index + resultIndex;
			if (!result[tempIndex]) result.push([]);
			keyA !== null && (result[tempIndex][keyA] = valA)
			keyB !== null && (result[tempIndex][keyB] = valB)
		})
	}
	return result;
}


exports.localesToXlsx = (config = {}) => {
	const { entry, output } = config
	let data = [{
		name: 'sheet',
		data: handleData(entry)
	}]

	fs.writeFile(output.path, xlsx.build(data), err => {
		if (err) console.log(err)
	})

	return data;
}