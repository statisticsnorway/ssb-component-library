import React from 'react';
import {shallow} from 'enzyme';
import StickyMenu from './index';

describe('StickyMenu component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<StickyMenu>StickyMenu</StickyMenu>);
		expect(wrapper).toMatchSnapshot();
	});
});
