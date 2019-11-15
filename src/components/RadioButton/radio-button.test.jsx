import React from 'react';
import {shallow} from 'enzyme';
import RadioButton from './index';

describe('RadioButton component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<RadioButton value="item">Item</RadioButton>);
		expect(wrapper).toMatchSnapshot();
	});
});
