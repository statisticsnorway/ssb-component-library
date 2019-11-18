module.exports = {
	collectCoverageFrom: [
		'src/**/index.jsx',
		'!<rootDir>/src/index.jsx',
		'!<rootDir>/src/App.jsx',
		'!<rootDir>/src/**/*stories.jsx',
		'!<rootDir>/node_modules/',
		'!<rootDir>/path/to/dir/',
	],
	moduleDirectories: [
		'node_modules',
		'src/components',
		'src/style',
	],
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/media/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/src/main.scss',
		'\\.svg$': '<rootDir>/svgTransform.js',
	},
	modulePaths: [
		'<rootDir>/src/scripts/atoms',
	],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFiles: ['<rootDir>/src/setupTests.js'],
	testMatch: ['**/*.test.jsx'],
	transform: { '^.+\\.jsx?$': 'babel-jest' },
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
