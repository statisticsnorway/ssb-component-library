import React from 'react';
import {shallow} from 'enzyme';
import Pagination from './index';

const items = [
	{ text: '1', path: '/1' },
	{ text: '2', path: '/2' },
	{ text: '3', path: '/3' },
	{ text: '4', path: '/4' },
	{ text: '5', path: '/5' },
	{ text: '6', path: '/6' },
	{ text: '7', path: '/7' },
	{ text: '8', path: '/8' },
	{ text: '9', path: '/9' },
	{ text: '10', path: '/10' },
	{	text: '11', path: '/11'	},
	{	text: '12', path: '/12'	},
	{	text: '13', path: '/13'	},
	{	text: '14', path: '/14'	},
	{	text: '15', path: '/15'	},
	{	text: '16', path: '/16'	},
	{	text: '17', path: '/17'	},
	{	text: '18', path: '/18'	},
	{	text: '19', path: '/19'	},
	{	text: '20', path: '/20'	},
];

describe('Pagination component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Pagination selectedPage={items[0]} items={items} />);
		expect(wrapper.find('.nav-button-square').first().hasClass('selected')).toEqual(true);
	});
	test('Sets correct pre selection', () => {
		const wrapper = shallow(<Pagination items={items} />);
	});
	describe('Local states', () => {
		test('', () => {
			const setState = jest.fn();
			const useStateSpy = jest.spyOn(React, 'useState');
			useStateSpy.mockImplementation(init => [init, setState]);
			const wrapper = shallow(<Pagination items={items} />);
			// console.log(wrapper.debug());
			console.log(wrapper.find('.direction-button').first().debug());
			wrapper.find('.direction-button').first().props().onClick();
			expect(setState).toHaveBeenCalledTimes(1);
			// expect(wrapper.find('direction-button')).toMatchSnapshot();
		});
	});
});
