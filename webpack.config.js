var webpack = require("webpack");
const path = require('path');
const os = require('os'); 
const env = process.env.NODE_ENV;


module.exports = {
	devtool: "source-map",
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js/'),
		publicPath: "/public"
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
			options:{
				cacheDirectory: true,
				presets: ["env", "react"]
			}	
		},
		{
			test: /\.(png|jpg)$/,
			loader: 'url-loader'
		}
		]
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
};