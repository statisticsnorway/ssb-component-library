import React from 'react';
import {shallow} from 'enzyme';
import Breadcrumb from './index';

const items = [
	{
		link: ' ',
		text: 'breadcrumb 1',
	},
	{
		link: ' ',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
	},
];

describe('Breadcrumb component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Breadcrumb items={items} />);
		expect(wrapper).toMatchSnapshot();
	});
});
