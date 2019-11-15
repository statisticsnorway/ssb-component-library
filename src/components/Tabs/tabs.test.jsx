import React from 'react';
import {shallow} from 'enzyme';
import Tabs from './index';

const items = [
	{
		title: 'Get Started',
		path: 'get-started/',
	},
	{
		title: 'Components',
		path: 'components/',
	},
	{
		title: 'Templates',
		path: 'templates/',
	},
];

describe('Tabs component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Tabs items={items} />);
		expect(wrapper).toMatchSnapshot();
	});
});
