import React from 'react';
import { render } from '../../utils/test'
import InputError from './index';

describe('InputError component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<InputError errorMessage="Insert error message" />);
		expect(asFragment()).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const { asFragment } = render(<InputError errorMessage="Insert error message" negative />);
		expect(asFragment()).toMatchSnapshot();
	});
});
