import React from 'react';
import {shallow} from 'enzyme';
import Text from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Text>Text</Text>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles className correctly', () => {
		const wrapper = shallow(<Text small negative>Text</Text>);
		expect(wrapper.find('.ssb-text-wrapper').hasClass('small-text')).toEqual(true);
		expect(wrapper.find('.ssb-text-wrapper').hasClass('negative')).toEqual(true);
	});
});
