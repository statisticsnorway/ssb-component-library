import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
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
		const { asFragment } = render(<Tabs items={items}/>);
		expect(asFragment()).toMatchSnapshot();
	});
	test('Sends callback', async () => {
		const onClick = jest.fn();
		const user = userEvent.setup();

		render(<Tabs onClick={onClick} items={items}/>);
		const tabButton = screen.getByText(items[0].title);
		await user.click(tabButton);

		expect(onClick).toBeCalled();
	});
	test('Sets correct init state', () => {
		render(<Tabs items={items} activeOnInit={items[2].path}/>);

		const buttonSpan = screen.getByText(items[2].title);
		expect(buttonSpan.parentElement.getAttribute('aria-selected')).toEqual('true');
	});
});
