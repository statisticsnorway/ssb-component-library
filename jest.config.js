module.exports = {
	collectCoverageFrom: [
		'src/**/index.[tj]s?(x)',
		'!<rootDir>/src/index.[tj]s?(x)',
		'!<rootDir>/src/App.[tj]s?(x)',
		'!<rootDir>/src/**/*stories.[tj]s?(x)',
		'!<rootDir>/node_modules/',
		'!<rootDir>/path/to/dir/',
	],
	moduleDirectories: [
		'node_modules',
		'src/components',
		'src/style',
	],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/src/main.scss',
		'\\.svg$': '<rootDir>/svgTransform.js',
	},
	modulePaths: [
		'<rootDir>/src/scripts/atoms',
	],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testMatch: ['**/*.test.[tj]s?(x)'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testEnvironment: 'jsdom',
};
