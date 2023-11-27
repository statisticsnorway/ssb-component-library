import React from 'react';
import { render } from '../../utils/test';
import FormError from './index';

const errorMessages = [
	'Not a valid email',
	'Select a country',
	'Feed the dog',
];

describe('FormError component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<FormError errorMessages={errorMessages} title="Some fields are not right!" />);
		expect(asFragment()).toMatchSnapshot();
	});

});
