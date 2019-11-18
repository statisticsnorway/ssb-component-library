import React from 'react';
import {mount, shallow} from 'enzyme';
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
		const wrapper = shallow(<Tabs items={items}/>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Sends callback', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Tabs onClick={onClick} items={items}/>);
		wrapper.find('.navigation-item').first().simulate('click');
		expect(onClick).toBeCalled();
	});
	test('Sets correct init state', () => {
		const wrapper = shallow(<Tabs items={items} activeOnInit={items[2].path}/>);
		expect(wrapper.find('.navigation-item').last().hasClass('active')).toEqual(true);
	});
});
