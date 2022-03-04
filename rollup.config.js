import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';

const NODE_ENV = process.env.ENV || 'development';

export default [{
	input: './src/index.js',
	output: {
		file: 'lib/bundle.js',
		format: 'cjs',
	},
	external: [
		'react',
		'prop-types',
		'uuid',
	],
	plugins: [
		scss({
			output: 'lib/bundle.css',
		}),
		svgr(),
		nodeResolve({
			extension: ['.jsx', '.js'],
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			preventAssignment: true,
		}),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
		commonjs({
			include: ['node_modules/**'],
			extensions: ['js', '.jsx'],
		}),
		terser(),
	],
}];
