import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';

const NODE_ENV = process.env.ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';

export default [{
	input: './src/index.js',
	output: {
		file: outputFile,
		format: 'cjs',
	},
	external: [
		'react',
		'prop-types',
		'uuid/v4',
	],
	plugins: [
		scss({
			output: NODE_ENV === 'development' ? 'bundled-styles.scss' : 'lib/bundle.css',
		}),
		resolve({ extension: ['.jsx', '.js'] }),
		replace({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs({
			include: ['node_modules/**'],
			extensions: ['js', '.jsx'],
			namedExports: {
				'node_modules/react/index.js': [
					'cloneElement',
					'createContext',
					'Component',
					'createElement',
					'useState',
					'useEffect',
					'useRef',
				],
				'node_modules/react-is/index.js': [
					'isElement',
					'isValidElementType',
					'ForwardRef',
				],
			},
		}),
		uglify(),
	],
}];
