function drawChart() {

	// const svg = d3.select('#chart')
	// 	.append('svg')
	// 	.attr('width', '100%')
	// 	.attr('height', '100%')
	// 	.style('background', '#FEF5E5')

	// const addFn = useAddRect(svg, {})

	// Array(1000).fill().forEach((item, index) => {
	// 	addFn({ text: index, width: 200 })
	// })

	var dataset = [250, 210, 170, 130, 90];  //数据（表示矩形的宽度）
	var width = 400;
	var height = 400;
	var svg = d3.select('#chart')
		.append('svg')
		.attr('width', width)
		.attr('height', height)

	// var linear = () => d3.scale.linear()
	// 	.domain([0, d3.max(dataset)])
	// 	.range([0, 250])

	var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
	svg.selectAll("rect")
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

// const dom = d3.select("#chart").append('svg').attr('width', 1200).attr('height', 800);

// useHorizontalHistogram(dom)();
// useZoomableBarChart();
// drawChart()

/* test start */
(() => {

	// let dataset = [250, 210, 170, 130, 90];  //数据（表示矩形的宽度）
	let dataset = [
		{ name: 'aa', value: 250 },
		{ name: 'ddfjskdjfksjdfk', value: 130 },
		{ name: 'bb', value: 210 },
		{ name: 'cc', value: 170 },
		{ name: 'ee', value: 90 }
	].sort((a, b) => b.value - a.value);  //数据（表示矩形的宽度）

	let rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
	let width = 300;  //画布的宽度
	let height = 300;   //画布的高度

	let svg = d3.select("#chart")     //选择文档中的body元素
		.append("svg")          //添加一个svg元素
		.attr("width", width)       //设定宽度
		.attr("height", height);    //设定高度

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", 50)
		.attr("y", function (d, i) {
			return i * rectHeight;
		})
		.attr("width", function (d) {
			return d.value;
		})
		.attr("height", rectHeight - 2)
		.attr("fill", "steelblue");

	svg.selectAll('text')
		.data(dataset)
		.enter()
		.append('text')
		.attr('x', 2)
		.attr("y", function (d, i) {
			return ++i * rectHeight - 8;
		})
		.text(function (d, i) {
			return d.name.slice(0, 4) + (d.name.length > 4 ? '...' : '');
		})

})()


/* test end */

