import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
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
	test('Matches snapshot', () => {
		const { asFragment } = render(<Pagination items={items} />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Sets correct default selection', () => {
		render(<Pagination selectedPage={items[0]} items={items} />);
		const first = screen.getByText('1');
		expect(first.classList.contains('selected')).toEqual(true);
	});

	describe('handleSelection function', () => {
		let callback;
		let useStateSpy;
		let user;

		beforeEach(() => {
			user = userEvent.setup();
			callback = jest.fn();
			useStateSpy = jest.spyOn(React, 'useState');
			useStateSpy.mockImplementation(init => [init, callback]);
		});

		test('First direction button onClick', async () => {
			render(<Pagination onSelect={callback} selectedPage={items[2]} items={items} />);
			const button = screen.getByText('Previous');
			await user.click(button.parentElement);

			expect(callback).toHaveBeenCalledTimes(1);
		});

		test('Next direction button', async () => {
			render(<Pagination onSelect={callback} items={items} />);
			const button = screen.getByText('Next');
			await user.click(button.parentElement);

			expect(callback).toHaveBeenCalledTimes(1);
		});

		test('Last nav button', async () => {
			render(<Pagination onSelect={callback} items={items} />);

			const button = screen.getByText('20');
			await user.click(button);
			
			expect(callback).toHaveBeenCalledTimes(1);
			expect(button.classList.contains('selected')).toEqual(true);
		});

		test('Clicking first item', async () => {
			render(<Pagination onSelect={callback} selectedPage={items[4]} items={items} />);

			const button = screen.getByText('1');
			await user.click(button);
			
			expect(callback).toHaveBeenCalledTimes(1);
			expect(button.classList.contains('selected')).toEqual(true);
		});
	});
});
