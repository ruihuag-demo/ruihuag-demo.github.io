// 获取元素 width
function getWidth(dom) {
	return Number(String(dom.style('width')).replace(/px/, ''))
}

// 获取元素 height
function getHeight(dom) {
	return Number(String(dom.style('height')).replace(/px/, ''))
}

function useAddRect(dom, _style = {}) {
	const {
		width, height,
		xOffect, yOffect,
		x = 0, y = 0,
		maxWidth = getWidth(dom) || 10000,
		maxHeight = getHeight(dom) || 10000
	} = _style;

	const colors = ['#00AEA6', '#DB0047', '#F28F00', '#EB5C36', '#242959', '#2965A7']
	let cur = 0;
	let _width = width || 120;
	let _height = height || 100;
	let _text_x_offest = xOffect || 20;
	let _text_y_offest = yOffect || 60;
	let _x = x;
	let _y = y;
	let origin_x = 0;
	let origin_y = _height;

	return function ({ text, x, y, width, height, xOffect, yOffect }) {

		if (_x + (width || _width) > maxWidth) {
			_y += origin_y;
			_x = origin_x;
		}

		if (_y + (height || _height) > maxHeight) {
			return;
		}

		dom.append('rect')
			.attr('x', _x)
			.attr('y', _y)
			.attr('width', width || _width)
			.attr('height', height || _height)
			.attr('fill', colors[cur % 6])

		dom.append('text')
			.attr('fill', '#fff')
			.text(isNaN(Number(text)) ? colors[cur % 6] : text)
			.attr('x', _x + (_text_x_offest || xOffect))
			.attr('y', _y + (_text_y_offest || yOffect))

		_x = x || _x + (x || width || _width);
		_y = y || _y;
		y && (_y = y)
		cur++;

		// console.log(JSON.stringify({ cur, _x, _y }, null, 2))
	}
}

function useHorizontalHistogram(dom) {
	return function () {
		var dataset = [250, 210, 170, 130, 90];  //数据（表示矩形的宽度）

		var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
		dom.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", 20)
			.attr("y", function (d, i) {
				console.log({ d, i })
				return i * rectHeight;
			})
			.attr("width", function (d) {
				return d;
			})
			.attr("height", rectHeight - 2)
			.attr("fill", "steelblue");
	}
}

let data = [
	{ "name": "E", "value": 0.12702 }, { "name": "T", "value": 0.09056 }, { "name": "A", "value": 0.08167 },
	{ "name": "O", "value": 0.07507 }, { "name": "I", "value": 0.06966 }, { "name": "N", "value": 0.06749 },
	{ "name": "S", "value": 0.06327 }, { "name": "H", "value": 0.06094 }, { "name": "R", "value": 0.05987 },
	{ "name": "D", "value": 0.04253 }, { "name": "L", "value": 0.04025 }, { "name": "C", "value": 0.02782 },
	{ "name": "U", "value": 0.02758 }, { "name": "M", "value": 0.02406 }, { "name": "W", "value": 0.0236 },
	{ "name": "F", "value": 0.02288 }, { "name": "G", "value": 0.02015 }, { "name": "Y", "value": 0.01974 },
	{ "name": "P", "value": 0.01929 }, { "name": "B", "value": 0.01492 }, { "name": "V", "value": 0.00978 },
	{ "name": "K", "value": 0.00772 }, { "name": "J", "value": 0.00153 }, { "name": "X", "value": 0.0015 },
	{ "name": "Q", "value": 0.00095 }, { "name": "Z", "value": 0.00074 }
].sort((a, b) => b.value - a.value);

const height = 500;
const width = 1200;
const margin = ({ top: 20, right: 0, bottom: 30, left: 40 })

x = d3.scaleBand()
	.domain(data.map(d => d.name))
	.range([margin.left, width - margin.right])
	.padding(0.1)

y = d3.scaleLinear()
	.domain([0, d3.max(data, d => d.value)]).nice()
	.range([height - margin.bottom, margin.top])

xAxis = g => g
	.attr("transform", `translate(0,${height - margin.bottom})`)
	.call(d3.axisBottom(x).tickSizeOuter(0))

yAxis = g => g
	.attr("transform", `translate(${margin.left},0)`)
	.call(d3.axisLeft(y))
	.call(g => g.select(".domain").remove())

function zoom(svg) {
	const extent = [
		[margin.left, margin.top],
		[width - margin.right, height - margin.top]
	];

	svg.call(d3.zoom()
		.scaleExtent([1, 8])
		.translateExtent(extent)
		.extent(extent)
		.on("zoom", zoomed));

	function zoomed(event) {
		x.range([margin.left, width - margin.right].map(d => event.transform.applyX(d)));
		svg.selectAll(".bars rect").attr("x", d => x(d.name)).attr("width", x.bandwidth());
		svg.selectAll(".x-axis").call(xAxis);
	}
}

function useZoomableBarChart() {

	const svg = d3.select('#chart')
		.append("svg")
		.attr("viewBox", [0, 0, width, height])
		.call(zoom);

	console.log(svg);

	svg.append("g")
		.attr("class", "bars")
		.attr("fill", "steelblue")
		.selectAll("rect")
		.data(data)
		.join("rect")
		.attr("x", d => x(d.name))
		.attr("y", d => y(d.value))
		.attr("height", d => y(0) - y(d.value))
		.attr("width", x.bandwidth());

	svg.append("g")
		.attr("class", "x-axis")
		.call(xAxis);

	svg.append("g")
		.attr("class", "y-axis")
		.call(yAxis);

	return svg.node();
}


