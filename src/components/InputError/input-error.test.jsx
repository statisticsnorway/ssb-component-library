import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import InputError from './index';

describe('InputError component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<InputError errorMessage="Insert error message" />);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<InputError errorMessage="Insert error message" negative />);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});
});
