import React from 'react';
import {mount, shallow} from 'enzyme';
import Dropdown from './index';

const items = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
	}, {
		title: 'Ocean',
		id: 'item3',
	},
];

jest.mock('uuid/v4', () => jest.fn(() => 1));

describe('Dropdown component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Dropdown header="Menu header" items={items} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Sets pre-selected value', () => {
		const wrapper = shallow(<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />);
		expect(wrapper.find('.dropdown-interactive-area').find('input').props().placeholder).toEqual('Ocean');
	});

	test('Searchable dropdown', () => {
		const wrapper = shallow(<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" />);
		expect(wrapper.find('.dropdown-interactive-area').find('input').props().disabled).toEqual(false);
	});

	test('Change classname to open on click', () => {
		const wrapper = shallow(<Dropdown header="Menu header" items={items} />);
		wrapper.find('.dropdown-interactive-area').simulate('click');
		expect(wrapper.find('input').hasClass('focused')).toEqual(true);
		expect(wrapper.exists('.list-of-options')).toEqual(true);
	});

	test('Choose first item', () => {
		const wrapper = shallow(<Dropdown header="Menu header" items={items} open />);
		wrapper.find('.list-of-options').find('button').first().simulate('click');
		expect(wrapper.find('.dropdown-interactive-area').find('input').props().placeholder).toEqual('Apples');
	});

	test('Triggers filter function on search', () => {
		const wrapper = shallow(<Dropdown searchField items={items} open />);
		expect(wrapper.find('.option-list-element')).toHaveLength(3);
		wrapper.find('input').simulate('change', {target: {value: 'oc'}});
		expect(wrapper.find('.option-list-element')).toHaveLength(1);
	});

});
