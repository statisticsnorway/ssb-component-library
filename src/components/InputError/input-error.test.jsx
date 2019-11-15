import React from 'react';
import {shallow} from 'enzyme';
import InputError from './index';

describe('InputError component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<InputError errorMessage="Insert error message" />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<InputError errorMessage="Insert error message" negative />);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});
});
