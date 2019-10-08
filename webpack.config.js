/* global __dirname, require, module*/

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

let plugins = [
	require('autoprefixer'),
	new MiniCssExtractPlugin({
		filename: 'bundle.css',
		chunkFilename: '[id].css',
	}),
	new BrotliPlugin({
		asset: '[path].br[query]',
		test: /\.(js|css|html|svg)$/,
		compressionOptions: { level: 11 },
		threshold: 10240,
		minRatio: 0.8,
		deleteOriginalAssets: false,
	}),
];

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
		styles: path.resolve(__dirname, './src/main.scss'),
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
		libraryTarget: 'umd',
		chunkFilename: '[name]-[hash].js',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/', '/.storybook/', '/storybook-static/'],
				use: [{
					loader: 'babel-loader',
					options: {
						configFile: path.resolve(__dirname, './babel.config.js'),
					},
				}],
			},
			{
				test: /\.s(c)ss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass')
						}
					},
					{ loader: 'postcss-loader' },
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							fallback: 'file-loader',
						},
					},
				],
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {
						limit: 10 * 1024,
						noquotes: true,
					},
				},
			},
		],
	},
	plugins: plugins,
	optimization: {
		nodeEnv: 'production',
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				extractComments: true,
				chunkFilter: chunk => chunk.name !== 'vendor',
			}),
		],
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
};
