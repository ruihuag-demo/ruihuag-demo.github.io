// console.log(require('./dataItem.js'))
const fs = require("fs");

// 抽离Path标签
let req = /<path[^>]*?>([\s\S]*?)<\/path>/gi

let chinaData = {}
let taiwanData = {}

new Promise((resolve, reject) => {

	fs.readFile("data.txt", 'utf-8', (err, data) => {
		if (err) throw err;
		let tData = data
		let allData = [];
		// 获取每个path单元
		tData.match(req).map(item => {

			// 获取属性
			const getAttAndVal = (req) => {
				let list = item.match(req)
				if (list && list.length > 0) {
					return list[0].split("=")[1].replace(/^(\s|")+|(\s|")+$/g, '')
				}
			}

			// 获取标签值
			const getTagValue = (req) => {
				return item.match(req)[0].split('>')[1].split('<')[0];
			}


			// console.log(item);
			const iData = {
				"stroke": getAttAndVal(/stroke=\".*?\"/),
				"fill": getAttAndVal(/fill=\".*?\"/),
				"id": getAttAndVal(/id=\".*?\"/),
				"d": getAttAndVal(/ d=\".*?\"/),
				"name": getTagValue(/<name[^>]*?>([\s\S]*?)<\/name>/),
				// "hc-middle-x": getTagValue(/<hc-middle-x[^>]*?>([\s\S]*?)<\/hc-middle-x>/),
				// "hc-middle-y": getTagValue(/<hc-middle-y[^>]*?>([\s\S]*?)<\/hc-middle-y>/),
			}
			if (iData.name === 'China') {
				chinaData = iData;
				// console.log(iData.d)
				return;
			}
			if (iData.name === 'Taiwan') {
				taiwanData = iData
				// console.log(iData.d)
				return;
			}
			if (taiwanData && chinaData) {
				chinaData.d = chinaData.d + " " + taiwanData.d
				// chinaData.d = String(chinaData.d).replace(/Z$/, taiwanData.d);
				// console.log('chinaData', chinaData);
				allData.push(chinaData)
				taiwanData = undefined; chinaData = undefined;
				return;
			} else {
				allData.push(iData);
			}

		})




		if (allData.length > 0) {
			resolve(allData.filter(i => i.id))
		}


	})
}).then(list => {
	// console.log(list[0])
	return list.map((iitem) => {
		let xylist = iitem.d.split(/M|L|Z/g).filter(i => i && i !== '')
		let minx = 0;
		let maxx = 99999;
		let miny = 0;
		let maxy = 99999;
		let x = 0;
		let y = 0;
		xylist.map((item, index) => {

			const [tx, ty] = item.split(',')
			let ix = Number(tx);
			let iy = Number(ty)

			if (index === 0) { x = ix; minx = ix; maxx = ix; y = iy; miny = iy; maxy = iy; return; }

			if (ix && ix > 0 && !Object.is(ix, NaN)) {
				maxx = ix > maxx ? ix : maxx
				minx = ix < minx ? ix : minx
				x = (x + ix) / 2;
			}
			if (iy && iy > 0 && !Object.is(iy, NaN)) {
				maxy = iy > maxy ? iy : maxy
				miny = iy < miny ? iy : miny
				y = (y + iy) / 2;
			}

		})

		return {
			...iitem,
			x, y, minx, miny, maxx, maxy,
			xmx: (x + minx) / 2,
			ymy: (y + maxy) / 2,
			mx: (minx + maxx) / 2,
			my: (miny + maxy) / 2
		}
	})
})
	.then(list => {
		// console.log('list[1]', list[1]);
		// list.forEach(item => {
		// 	if (item.name === 'China') {
		// 		item.d = ''
		// 		console.log(item)
		// 	}
		// 	// if (item.name === 'Canada') {
		// 	// 	item.d = ''
		// 	// 	console.log(item)
		// 	// }
		// })
		const str = JSON.stringify({ data: list })
		// fs.writeFile("mworld.json", str, (err) => { console.log(err) });
	})


// let tmin = 500;
// "M543.8,180.7 L545.5,179.0 L548.2,179.6 L545.7,182.6 Z M505.9,164.3 L505.7,162.9 L504.4,163.2 L498.6,162.2 L492.8,158.0 L490.8,158.3 L486.4,155.9 L485.7,153.4 L487.9,152.9 L486.8,149.5 L484.6,147.0 L483.8,147.1 L482.7,146.7 L481.1,144.9 L478.4,143.7 L478.1,143.5 L479.1,143.2 L478.8,140.4 L477.0,140.3 L476.7,138.3 L477.3,137.0 L482.7,135.0 L485.2,134.7 L489.2,132.1 L490.4,129.9 L489.0,125.5 L493.2,124.3 L494.6,120.3 L497.9,121.2 L499.4,120.7 L499.9,117.4 L502.9,115.7 L503.2,115.6 L503.8,115.5 L504.1,116.9 L508.6,119.2 L510.0,121.8 L509.7,125.1 L514.7,125.7 L518.3,127.2 L520.2,130.9 L530.3,131.4 L534.3,133.1 L537.1,133.1 L540.1,131.9 L545.3,131.5 L550.0,128.6 L549.0,126.9 L550.1,125.4 L553.2,126.2 L557.1,124.5 L558.9,122.5 L565.2,121.0 L562.6,118.4 L561.1,118.4 L561.0,118.5 L560.7,118.9 L557.5,119.1 L556.8,118.0 L559.1,113.9 L561.1,114.6 L563.8,112.5 L566.9,108.1 L565.5,106.4 L567.0,105.1 L571.7,104.3 L576.4,105.8 L580.9,114.6 L583.4,114.9 L586.6,119.2 L589.3,119.1 L593.0,117.4 L593.7,119.1 L590.0,125.4 L589.5,124.8 L588.4,125.0 L586.4,125.9 L587.0,127.8 L585.6,131.3 L580.8,132.6 L581.0,134.0 L578.1,133.3 L576.9,135.1 L573.8,136.9 L567.6,139.9 L569.8,136.0 L567.7,135.0 L563.5,138.9 L561.1,139.1 L564.4,143.5 L566.8,141.9 L570.6,142.9 L566.9,144.9 L563.9,148.0 L565.9,149.6 L567.1,153.1 L568.9,154.6 L569.2,156.8 L567.3,157.6 L570.0,159.1 L563.2,168.8 L558.7,173.2 L555.4,173.4 L554.3,174.6 L547.6,176.3 L546.1,178.5 L545.8,176.1 L542.4,176.1 L537.3,172.3 L534.7,174.0 L531.2,174.2 L530.0,174.5 L529.4,175.9 L525.5,174.7 L526.2,172.9 L524.4,170.9 L522.6,171.3 L522.7,168.9 L524.6,167.2 L524.6,163.7 L522.0,162.4 L519.7,160.0 L516.9,160.1 L513.0,163.0 L511.1,163.4 L508.4,162.1 Z M564.6,172.0 L565.6,172.0 L567.5,168.9 L569.1,168.8 L567.0,175.2 Z".split(/L|M|Z/).filter(i => i && i !== '').forEach(item => {
// 	let temp = item && item.split(',')
// 	if (temp && temp.length > 1) {
// 		let ntemp = Number(temp[0])
// 		if (ntemp < tmin) {
// 			tmin = ntemp
// 		}
// 		// if (Number(item.split(',')[0]) < tmin) {
// 		// 	tmin = Number(item.split(',')[0]);
// 		// 	console.log(item)
// 		// }
// 	}

// })
// console.log(tmin)
// 476.7
