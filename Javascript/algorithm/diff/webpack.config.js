module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: './js/bundle.js'
	},
	devServer: {
		contentBase: './public',
		inline: true
	}
}