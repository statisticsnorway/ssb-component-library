import React from 'react';
import {shallow} from 'enzyme';
import RadioGroup from './index';

const radioItems = [
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

describe('RadioGroup component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<RadioGroup header="Header" items={radioItems} />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<RadioGroup header="Header" items={radioItems} orientation="row" />);
		expect(wrapper.find('.boxes').hasClass('flex-row')).toEqual(true);
	});
});
