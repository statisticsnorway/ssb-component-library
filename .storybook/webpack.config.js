const path = require('path');
const sass = require('sass');

module.exports = {
	module: {
		rules: [{
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
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader',
			],
		}],
	},

	resolve: {
		extensions: ['.jsx', '.js'],
	},
};
