let arr = [
	{
		code: 'new1',
		name: 'appa'
	},{
		code: 'new1',
		name: 'appb'
	},
	{
		code: 'new2',
		name: 'appc'
	},{
		code: 'new1',
		name: 'appd'
	},{
		code: 'new2',
		name: 'appe'
	},{
		code: 'new1',
		name: 'appf'
	}
]
let shopList = {};
arr.map( (item, index) => {
	if( shopList[item.code] === undefined ){
		shopList[item.code] = {
			id: index,
			msg: item.code,
			shop: [],
		}
	}
	shopList[item.code].shop.push({
		name: item.name,
	})
})


console.log(shopList)