const path = require('path');

module.exports = {
    stories: ['../**/*.story.jsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    staticDirs: ['../src/media'],

    webpackFinal: config => {
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test(".svg")
        );
        fileLoaderRule.exclude = /\.svg$/;
        config.module.rules.push(
            {
				include: path.resolve(__dirname, '../'),
				test: /\.(s*)css$/i,
                sideEffects: true,
				use: [
					'style-loader',
					'css-loader',
                    'sass-loader'
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
	},

    features: {
        postcss: false,
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
};

