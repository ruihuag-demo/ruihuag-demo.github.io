const fn = [
	() => {
		let list = [
			new Date('4-21-2019 21:00:00 EST'),
			new Date("2019/04/21 21:00:00 EDT"),
			new Date("2019/04/21 9:00 PM EDT"),
			new Date('4/21/2019 9:00 PM EST'),
			new Date('2019-04-21T21:00:00'),
			new Date("Apr 21, 2019 9:00:00"),
			new Date("April 21, 2019 9:00:00"),
			new Date(95, 3, 21), //两位数年份表示 1900 - 1999 年,
			new Date(),
			new Date(1453094034000),
			new Date('Tue Apr 02 2019 16:39:08'),
			new Date(2019, 3, 2, 16, 37, 22),
			new Date("2019-04-21 21:00:00 EDT"),
			new Date("2019-04-21 21:00:00 EDT").toUTCString(),
		]
		list.map((item, index) => {
			console.log(index + " : " + item)
		})
	},

]

fn[fn.length - 1]();


