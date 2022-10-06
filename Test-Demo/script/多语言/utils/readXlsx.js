const xlsx = require("node-xlsx");
const fs = require("fs");
const { writeFile } = require('./index')


const readXlsx = (path, callback) => {
	try {
		const data = xlsx.parse(path)
		callback && callback(data)
		return data;
	} catch (e) {
		callback && callback();
		console.log("excel读取异常,error=%s", e);
	}
}


// 读取Excel数据
exports.readXlsx = readXlsx;

// 处理数据
function handleDataByConfig(entry) {
	const { selectSheet = 0, dataIndex = {}, format = {} } = entry
	const { useHead = true, dataFormat = {} } = format;
	let output_DATA = {};

	/* 处理数据 start */
	const DATA = readXlsx(entry.path)[selectSheet].data
	if (!format.useHead) delete DATA[0] // 是否去除首行

	DATA.map((item) => {
		for (let index in dataIndex) {
			let [key, val] = dataIndex[index];
			if (!output_DATA[index]) output_DATA[index] = {};
			if (dataFormat[index]) {
				const [keyFormat = '', valFormat = ''] = dataFormat[index];
				key = keyFormat.replace(/\$\{key\}/gi, item[key]);
				val = valFormat.replace(/\$\{value\}/gi, item[val]);
				output_DATA[index][key] = val
			} else {
				output_DATA[index][item[key]] = item[val]
			}

		}
	})
	/* 处理数据 end */

	return output_DATA;
}

// 写出为文件
function writeFileByConfig(output_DATA, output) {
	const { path = './', filename = {}, format = {} } = output
	const { allDataFormat = "", dataFormat = {} } = format

	/* 写文件 start */
	for (let index in filename) {
		let filePath = '';
		let fileData = '';
		if (output_DATA[index]) {

			filePath = `${path}${filename[index]}`
			fileData = `${JSON.stringify(output_DATA[index], null, '\t')}`

			// 格式化
			if (dataFormat !== {} && dataFormat[index]) {
				if (dataFormat[index].object === true) {
					let tempData = '{\n';
					for (let i in JSON.parse(fileData)) {
						tempData += `\t${i}:${JSON.parse(fileData)[i]},\n`
					}
					fileData = tempData + "}";
					fileData = dataFormat[index].base.replace(/\$\{data\}/gi, fileData);
				} else {
					fileData = dataFormat[index].base.replace(/\$\{data\}/gi, fileData);
				}
			} else if (allDataFormat !== "") {
				fileData = allDataFormat.replace(/\$\{data\}/gi, fileData);
			}


			// console.log(fileData)
			writeFile(filePath, fileData)
		}
	}
	/* 写文件 end */
}


exports.readXlsxtToWriteFile = (config) => {
	const { entry, output } = config

	let output_DATA = handleDataByConfig(entry);;
	writeFileByConfig(output_DATA, output);

}