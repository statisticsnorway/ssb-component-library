import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Dropdown from './index';

const items = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
		disabled: true,
	}, {
		title: 'Ocean',
		id: 'item3',
	},
];

jest.mock("../../utils/useId", () => {
	return { useId: () => 1};
});

describe('Dropdown component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Dropdown header="Menu header" items={items} />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Sets pre-selected value', async () => {
		render(<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />);
		expect((await screen.findByRole('button')).textContent).toEqual('Ocean');
	});

	test('Searchable dropdown', async () => {
		render(<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" />);
		expect(await screen.findByPlaceholderText('Search and select')).toBeVisible();
		expect((await screen.findByRole('combobox')).disabled).toEqual(false);
	});

	test('Change classname to open on click', async () => {
		const user = userEvent.setup();
		render(<Dropdown header="Menu header" items={items} />);

		const button = await screen.findByRole('button');
		await user.click(button);

		expect(await screen.findByRole('listbox')).toBeVisible();
		expect(await screen.findByText(items[0].title)).toBeVisible();
		expect(await screen.findByText(items[1].title)).toBeVisible();
		expect(await screen.findByText(items[2].title)).toBeVisible();
	});

	test('Choose first item', async () => {
		const user = userEvent.setup();
		Element.prototype.scrollIntoView = jest.fn();

		render(<Dropdown header="Menu header" items={items} open />);

		const option = await screen.findByRole('option', {name: items[0].title});
		await user.click(option);
		expect((await screen.findByRole('button')).textContent).toEqual(items[0].title);
	});

	test('Verify disabled item', async () => {
		render(<Dropdown header="Menu header" items={items} open />);
		const option = await screen.findByRole('option', {name: items[1].title});
		expect(option.getAttribute("aria-disabled")).toEqual('true');
	});

	test('Triggers filter function on search', async () => {
		const user = userEvent.setup();
		render(<Dropdown searchField searchable items={items} open />);

		expect(await screen.findByText(items[0].title)).toBeVisible();
		expect(await screen.findByText(items[1].title)).toBeVisible();
		expect(await screen.findByText(items[2].title)).toBeVisible();

		const input = await screen.findByRole('combobox');
		await user.click(input);
		await user.keyboard('oc')

		expect(await screen.queryByText(items[0].title)).toBeNull();
		expect(await screen.queryByText(items[1].title)).toBeNull();
		expect(await screen.queryByText(items[2].title)).toBeVisible();
	});

});
