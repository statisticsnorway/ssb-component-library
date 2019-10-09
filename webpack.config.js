// const webpack = require('webpack');
// const path = require('path');
// const sass = require('sass');
// const BrotliPlugin = require('brotli-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
//
// const babelConf = path.resolve(__dirname, './babel.config.js');
//
// module.exports = {
// 	mode: 'production',
// 	entry: {
// 		main: path.resolve(__dirname, './src/index.js'),
// 		styles: path.resolve(__dirname, './src/main.scss'),
// 	},
// 	output: {
// 		filename: '[name].js',
// 		path: path.resolve(__dirname, './dist'),
// 		chunkFilename: '[name]-[hash].js',
// 	},
// 	resolve: {
// 		extensions: ['.jsx', '.js']
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(js|jsx)$/,
// 				exclude: [/node_modules/, '/tests/', '/.storybook/', '/storybook-static/'],
// 				use: [{
// 					loader: 'babel-loader',
// 					options: {
// 						configFile: babelConf,
// 					},
// 				}],
// 			},
// 			{
// 				test: /\.(s*)css$/i,
// 				use: [
// 					'style-loader',
// 					'css-loader',
// 					{
// 						loader: 'sass-loader',
// 						options: {
// 							implementation: sass,
// 						},
// 					},
// 				],
// 			},
// 			{
// 				test: /\.(png|jpe?g|gif)$/,
// 				use: [
// 					{
// 						loader: 'url-loader',
// 						options: {
// 							fallback: 'file-loader',
// 						},
// 					},
// 				],
// 			},
// 			{
// 				test: /\.svg/,
// 				use: {
// 					loader: 'svg-url-loader',
// 					options: {
// 						limit: 10 * 1024,
// 						noquotes: true,
// 					},
// 				},
// 			},
// 		],
// 	},
// 	plugins: [
// 		new BrotliPlugin({
// 			asset: '[path].br[query]',
// 			test: /\.(js|css|html|svg)$/,
// 			compressionOptions: { level: 11 },
// 			threshold: 10240,
// 			minRatio: 0.8,
// 			deleteOriginalAssets: false,
// 		}),
// 	],
// 	optimization: {
// 		nodeEnv: 'production',
// 		minimize: true,
// 		minimizer: [
// 			new TerserPlugin({
// 				test: /\.js(\?.*)?$/i,
// 				extractComments: true,
// 				chunkFilter: chunk => chunk.name !== 'vendor',
// 			}),
// 		],
// 		splitChunks: {
// 			chunks: 'async',
// 			cacheGroups: {
// 				commons: {
// 					test: /[\\/]node_modules[\\/]/,
// 					name: 'vendors',
// 					chunks: 'all',
// 				},
// 			},
// 		},
// 	},
// };
