import React from 'react';
import {shallow} from 'enzyme';
import Number from './index';

describe('Number component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Number number="599246391" />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Number number="599246391" size="small" />);
		expect(wrapper.hasClass('small')).toEqual(true);
	});

});
