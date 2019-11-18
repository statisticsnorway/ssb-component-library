import React from 'react';
import {mount, shallow} from 'enzyme';
import CheckboxGroup from './index';
import Checkbox from '../Checkbox';

const items = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
		disabled: true,
	},
];

describe('CheckboxGroup component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<CheckboxGroup header="Header" items={items} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('OnChange in child triggers parent', () => {
		const onChange = jest.fn();
		const wrapper = mount(<CheckboxGroup header="Header" onChange={onChange} items={items} />);
		wrapper.find(Checkbox).first().find('input').simulate('change', {target: {checked: true}});
		expect(onChange).toBeCalled();
	});
});
