import React from 'react';
import {shallow} from 'enzyme';
import Highlight from './index';

describe('Highlight component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Highlight>«Highlight»</Highlight>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Highlight negative>«Highlight»</Highlight>);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
