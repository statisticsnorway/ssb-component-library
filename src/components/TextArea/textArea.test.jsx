import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import TextArea from './index';

jest.mock("../../utils/useId", () => {
	return { useId: () => 1};
});

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<TextArea rows={5} cols={10}>Input</TextArea>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders label if added', () => {
		render(<TextArea label="Label 123" />);
		expect(screen.getByText('Label 123')).toBeVisible();
	});

	test('Adds optional classes to wrapper', () => {
		const { asFragment } = render(<TextArea negative error />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('handleInputChange', async () => {
		const handleChange = jest.fn();
		const user = userEvent.setup();

		render(<TextArea handleChange={handleChange} />);
		const input = screen.getByRole('textbox');
		await user.click(input);
		await user.keyboard('hello');

		expect(handleChange).toBeCalledWith('hello');
	});

	test('respects rows and cols', () => {
		render(<TextArea rows={5} cols={25} />);
		const textArea = screen.getByRole('textbox');

		expect(textArea.getAttribute('rows')).toEqual("5");
		expect(textArea.getAttribute('cols')).toEqual("25");
	});

	test('Renders an error message on error', () => {
		render(<TextArea error errorMessage="An error" />);
		expect(screen.getByText('An error')).toBeVisible();
	})
});
