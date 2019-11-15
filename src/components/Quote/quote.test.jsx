import React from 'react';
import {shallow} from 'enzyme';
import Quote from './index';

describe('Quote component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Quote>«Quote»</Quote>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Quote negative>«Quote»</Quote>);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
