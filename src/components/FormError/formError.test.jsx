import React from 'react';
import {shallow} from 'enzyme';
import FormError from './index';

const errorMessages = [
	'Not a valid email',
	'Select a country',
	'Feed the dog',
];

describe('FormError component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<FormError errorMessages={errorMessages} title="Some fields are not right!" />);
		expect(wrapper).toMatchSnapshot();
	});

});
