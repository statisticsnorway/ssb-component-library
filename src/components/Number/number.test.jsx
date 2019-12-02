import React from 'react';
import {shallow} from 'enzyme';
import Number from './index';

describe('Number component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Number>599 246 391</Number>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Number size="small">599 246 391</Number>);
		expect(wrapper.hasClass('small')).toEqual(true);
	});

});
