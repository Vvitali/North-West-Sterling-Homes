var webpack = require("webpack");
const path = require('path');
const os = require('os');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');


module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		},	
		{
			test: /\.js?/,
			loader: "babel-loader",
			exclude: [
			path.resolve(__dirname, "node_modules")
			],
			query:{
				cacheDirectory: true,
				presets: ['react']
			}
		}
		]
	},
	plugins: [
	new UglifyJsParallelPlugin({
            workers: os.cpus().length, // usually having as many workers as cpu cores gives good results
        })
	]
};