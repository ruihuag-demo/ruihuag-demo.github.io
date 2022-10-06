var App = {
	init: function (b) {
		a = 12;
		console.log('--b--', b);
		this.get()
	},
	get: function () {
		console.log(this)
		return this;
	}
}

// module.exports = App
module.exports = App.init.bind(App);