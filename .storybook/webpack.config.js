const path = require('path');
const sass = require('sass');

module.exports = {
	module: {
		rules: [
			{
				include: path.resolve(__dirname, '../'),
				test: /\.(s*)css$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: sass,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|woff|ttf)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},

	resolve: {
		extensions: ['.jsx', '.js'],
	},
};
