const path = require('path');
const sass = require('sass');

module.exports = {
    stories: ['../**/*.story.jsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    webpackFinal: async (config, { configType }) => {
        
        config.module.rules.push(
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
        );
        return config;
    },
    resolve: {
		extensions: ['.jsx', '.js'],
	}
};

