import React from 'react';
import {shallow} from 'enzyme';
import RadioButton from './index';

describe('RadioButton component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<RadioButton value="item">Item</RadioButton>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Callback is triggered', () => {
		const callback = jest.fn();
		const wrapper = shallow(<RadioButton callback={callback} value="item">Item</RadioButton>);
		wrapper.find('input').simulate('change', { target: { checked: true}});
		expect(callback).toBeCalled();
	})
});
