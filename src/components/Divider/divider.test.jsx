import React from 'react';
import { shallow } from 'enzyme';
import {render} from '@testing-library/react'
import Divider from './index';

describe('Divider component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Divider />);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('set Light color', () => {
		const wrapper = shallow(<Divider light />);
		expect(wrapper.hasClass('type-light')).toEqual(true);
	});
	test('set Dark color and optional className', () => {
		const wrapper = shallow(<Divider dark className="mt-3"/>);
		expect(wrapper.hasClass('type-dark')).toEqual(true);
		expect(wrapper.hasClass('mt-3')).toEqual(true);
	});
});
