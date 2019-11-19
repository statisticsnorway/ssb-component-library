import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './index';

describe('Checkbox component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Checkbox value="item">Item</Checkbox>);
		expect(wrapper).toMatchSnapshot();
	});

	test('Sets selected state by default prop', () => {
		const wrapper = shallow(<Checkbox value="item" selected>Item</Checkbox>);
		expect(wrapper.find('input').props().checked).toEqual(true);
	});

	test('Sends callback', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Checkbox callback={onClick} value="item">Item</Checkbox>);
		wrapper.find('input').simulate('change', {target: {checked: true}});
		expect(onClick).toBeCalled();
	});
});
