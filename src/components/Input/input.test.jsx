import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Input from './index';

jest.mock("../../utils/useId", () => {
	return { useId: () => 1};
});

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Input>Input</Input>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders label if added', async () => {
		render(<Input label="Label 123" />);
		expect(await screen.findByText('Label 123')).toBeVisible();
	});

	test('Adds optional classes to wrapper', () => {
		const { asFragment } = render(<Input negative error />);
		expect(asFragment()).toMatchSnapshot();
	});
	
	test('Type is customizable', async () => {
		render(<Input type="email" />);
		// default role of type=email input is textbox
		const input = await screen.findByRole('textbox');
		expect(input.type).toEqual('email');
	});

	test('Searchable input renders search icon', () => {
		const { asFragment } = render(<Input ariaLabel="Input field Search" searchField placeholder="Search text" />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('handleInputChange', async () => {
		const handleChange = jest.fn();
		const user = userEvent.setup();

		render(<Input handleChange={handleChange} />);
		const input = screen.getByRole('textbox');
		await user.click(input)
		await user.keyboard('hello')

		expect(handleChange).toBeCalledWith('hello');
	});

	test('handle submit', async () => {
		const handleSubmit = jest.fn();
		const user = userEvent.setup();

		render(<Input searchField submitCallback={handleSubmit} />);
		const button = await screen.findByRole('button');
		await user.click(button)

		expect(handleSubmit).toBeCalled();
	});

	test('Renders an error message on error', async () => {
		render(<Input error errorMessage="An error" />);
		expect(await screen.findByText('An error')).toBeVisible();
	})

});
