
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const formatTS = require('@formatjs/ts-transformer');

module.exports = {
	// entry:'./src/index.tsx',
	mode: 'development',
	// stats: 'errors-only',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
		extensions: ['.tsx', '.js', '.ts', '.less', '.css','.module.less','.d.ts']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: false
					}
				},
				// exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							getCustomTransformers() {
								return {
									before: [
										formatTS.transform({
											overrideIdFn: '[sha512:contenthash:base64:6]',
										}),
									],
								};
							},
						},
					},
				],
				// exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				exclude: /\.module.less/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
						options: {
							lessOptions: {
								// 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
								// modifyVars: themes[process.env.theme],
								// modifyVars: themes[process.env.theme],
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			//设置模块化样式，添加hash命名，antd的样式修改只能引入.less文件覆盖
			{
				test: /\.module.less$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '_[local]_[hash:base64:6]',
							},
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								importLoaders: 2,
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
				type: 'asset/resource',
				exclude: /node_modules/,
			},

		]
	},
	plugins: [
		//数组 放着所有的webpack插件
		new HtmlWebpackPlugin({
			title: 'RH-Design',
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'index.html', //打包后的文件名
			hash: true,
			cache: false,
			// favicon: './src/assets/images/favicon.ico',
			minify: {
				removeComments: true,
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
				minifyCSS: true // 缩小CSS样式元素和样式属性
			},
		})
	]
}