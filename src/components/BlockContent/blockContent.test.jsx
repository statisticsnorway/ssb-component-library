import React from 'react';
import {shallow} from 'enzyme';
import BlockContent from './index';

describe('BlockContent component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<BlockContent>BlockContent</BlockContent>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<BlockContent sectionNumber={1}>BlockContent</BlockContent>);
		expect(wrapper.find('.section-number').length).toBe(1);
	});
});
