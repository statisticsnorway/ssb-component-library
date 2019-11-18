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
		'\\.(css|scss)$': '<rootDir>/src/main.scss',
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
