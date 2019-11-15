import React from 'react';
import {shallow} from 'enzyme';
import CheckboxGroup from './index';

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
});