import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import BlockContent from './index';

describe('BlockContent component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<BlockContent>BlockContent</BlockContent>);
		expect(asFragment()).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<BlockContent sectionNumber={1}>BlockContent</BlockContent>);
		expect(wrapper.find('.section-number').length).toBe(1);
	});
});
