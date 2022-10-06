const data = {
	"country": [
		{ "qty": 153, "placeId": "ChIJwULG5WSOUDERbzafNHyqHZU", "shortName": "CN", "longName": "中国" }
	],
	"prov": [
		{ "qty": 153, "placeId": "ChIJP1yvMvGFUjERKZ8lCW8c1C4", "shortName": "广东省", "longName": "广东省", "parentPlaceId": "ChIJwULG5WSOUDERbzafNHyqHZU" }
	],
	"city": [
		{ "qty": 141, "placeId": "ChIJta-eZoVoATQRBMbqOlLiMd8", "shortName": "珠海市", "longName": "珠海市", "parentPlaceId": "ChIJP1yvMvGFUjERKZ8lCW8c1C4" },
		{ "qty": 12, "placeId": "ChIJzbfdvDhWqjYRZhmcg8YXRF0", "shortName": "阳江市", "longName": "阳江市", "parentPlaceId": "ChIJP1yvMvGFUjERKZ8lCW8c1C4" }],
	"road": [
		{ "qty": 141, "placeId": "ChIJwePVGFtbATQR4vESlKnVeSs", "shortName": "香洲区", "longName": "香洲区", "parentPlaceId": "ChIJta-eZoVoATQRBMbqOlLiMd8" },
		{ "qty": 12, "placeId": "ChIJbQwLltbJqzYRLeJuGO890MA", "shortName": "阳春市", "longName": "阳春市", "parentPlaceId": "ChIJzbfdvDhWqjYRZhmcg8YXRF0" }],
}

// add sonNum: 表示当前参数下级参数
function handleData(data) {
	let relas = ['country', 'prov', 'city', 'road']//前参为后参的父级
	relas.forEach((place, index) => {
		data[place] = data[place].map(item => {
			let id = item.placeId;
			let sonNum = 0;
			if (index < relas.length - 1)
				data[relas[index + 1]]
					.forEach(splace =>
						splace.parentPlaceId === id && sonNum++
					)
			return {
				...item,
				sonNum
			}
		});
	});
	return data;
}




// country:[{ prov:[ {city: [{}] } ] } ]
function initTree(obj) {
	let relas = ['country', 'prov', 'city', 'road']//前参为后参的父级
	let result = obj[relas[0]]
	const addChild = (index, id) => {
		let res = [];
		if (!relas[index]) return []

		obj[relas[index]].map(item => {
			if (item.parentPlaceId === id) {
				item[relas[index]] = addChild(index + 1, item.placeId)
				res.push(item)
			}
		})
		return res;
	}
	result = result.map(item => {
		item[relas[0]] = addChild(1, item.placeId)
		return item;
	})
	return result;

}

function initTree2(obj) {
	let relas = ['country', 'prov', 'city', 'road']//前参为后参的父级
	let result = obj[relas[0]]
	const addChild = (index, id) => {
		let res = [];
		if (!relas[index]) return []

		obj[relas[index]].map(item => {
			if (item.parentPlaceId === id) {
				item['subList'] = addChild(index + 1, item.placeId)
				res.push(item)
			}
		})
		return res;
	}
	result = result.map(item => {
		item['subList'] = addChild(1, item.placeId)
		return item;
	})
	return result;

}


// handleData(data)
// console.log(handleData(data))
// console.log(JSON.stringify(initTree(data), null, 1));
console.log(JSON.stringify(initTree2(data), null, 1));