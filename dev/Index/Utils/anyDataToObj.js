let arr = [
	{
		code: "msg_code_wait_hide_code",
		createDate: "2021-07-21 14:34:53",
		id: "5670939225738971136",
		msg: "{\"en_US\": \"{\\\"title\\\":\\\"Prompt\\\",\\\"content\\\":\\\"Dear customer, please ,uncover the top label to scan the hidden QR code with the app after purchase to receive maximum protection against counterfeits. \\\"}\", \"ja_JP\": \"{\\\"title\\\":\\\"fasdf\\\",\\\"content\\\":\\\"fasdfasd\\\",\\\"axrCodeInfo\\\":\\\"123123\\\"}\", \"zh_CN\": \"{\\\"title\\\":\\\"权益提示\\\",\\\"content\\\":\\\"亲爱的顾客，为了更好地防伪，请在购买产品后揭开面层标签，然后使用应用扫描隐藏的二维码以进行验证。谢谢！\\\",\\\"axrCodeInfo\\\":\\\"123123\\\"}\", \"zh_TW\": \"{\\\"title\\\":\\\"權益提示\\\",\\\"content\\\":\\\"親愛的顧客，為了更好地防偽，請在購買產品後揭開面層標籤，然後使用應用掃描隱藏的二維碼以進行驗證。謝謝！ \\\"}\"}",
		name: "{\"en_US\": \"Waiting User Authentication: Covert Code\", \"ja_JP\": \"123fasfd\", \"zh_CN\": \"待暗码验证\", \"zh_TW\": \"待暗碼驗證\"}",
		remarks: "",
		sort: 10,
		// arr: [1, 2, 3],
	},
	{
		code: "msg_code_wait_hide_code",
		createDate: "2021-07-21 14:34:53",
		createUserId: "5662217192867890688",
		msg: "{\"en_US\": \"{\\\"title\\\":\\\"Prompt\\\",\\\"content\\\":\\\"Dear customer, please ,uncover the top label to scan the hidden QR code with the app after purchase to receive maximum protection against counterfeits. \\\"}\", \"ja_JP\": \"{\\\"title\\\":\\\"fasdf\\\",\\\"content\\\":\\\"fasdfasd\\\",\\\"axrCodeInfo\\\":\\\"123123\\\"}\", \"zh_CN\": \"{\\\"title\\\":\\\"权益提示\\\",\\\"content\\\":\\\"亲爱的顾客，为了更好地防伪，请在购买产品后揭开面层标签，然后使用应用扫描隐藏的二维码以进行验证。谢谢！\\\",\\\"axrCodeInfo\\\":\\\"123123\\\"}\", \"zh_TW\": \"{\\\"title\\\":\\\"權益提示\\\",\\\"content\\\":\\\"親愛的顧客，為了更好地防偽，請在購買產品後揭開面層標籤，然後使用應用掃描隱藏的二維碼以進行驗證。謝謝！ \\\"}\"}",
		name: "{\"en_US\": \"Waiting User Authentication: Covert Code\", \"ja_JP\": \"123fasfd\", \"zh_CN\": \"待暗码验证\", \"zh_TW\": \"待暗碼驗證\"}",
		remarks: "",
		sort: 10,
		// arr: [1, 2, 3],
	},
]


let data = {
	a: arr,
	b: 123,
	c: 'afjdk',
	name: "{\"en_US\": \"Waiting User Authentication: Covert Code\", \"ja_JP\": \"123fasfd\", \"zh_CN\": \"待暗码验证\", \"zh_TW\": \"待暗碼驗證\"}",
	arr: [1, 2, 3],
	arr2: [],
}


/* 字符串 需要判断是否为 JSON字符串 */
// 判断头和尾分别是否有 {}
const handleString = (str = '') => {
	if (str.match(/^[\{]+.*[\}]+$/g)) {
		return anyDataToObj(JSON.parse(str));
	} else {
		return str;
	}
}

/* 对象 需要判断是否为数组 */
const handleObj = (obj) => {
	if (Array.isArray(obj)) {
		// 判断首项 类型
		return obj.length > 0 ? anyDataToObj(obj) : obj;
	} else {
		return anyDataToObj(obj);
	}
}

const anyDataToObj = (data) => {
	let result = null;
	if (Array.isArray(data)) {
		result = [];
		for (let key = 0, len = data.length; key < len; key++) {
			let tData = data[key];
			switch (typeof tData) {
				/* 数字 直接返回 */
				case 'number':
					result.push(tData);
					break;
				case 'string':
					result.push(handleString(tData));
					break;
				case 'object':
					result.push(handleObj(tData));
					break;
			}
		}
	} else {
		result = {};
		for (let key in data) {
			let tData = data[key];
			switch (typeof tData) {
				/* 数字 直接返回 */
				case 'number':
					result[key] = tData;
					break;
				case 'string':
					result[key] = handleString(tData);
					break;
				case 'object':
					result[key] = handleObj(tData);
					break;
			}
		}
	}
	return result;
}

console.log("---------------------------")
console.log(anyDataToObj(data))
// console.log(anyDataToObj(data).a[0])
// console.log(anyDataToObj([1, 2, 3]))