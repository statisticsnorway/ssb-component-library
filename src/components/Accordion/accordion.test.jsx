import React from 'react';
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Accordion from './index';

const headerText = "This is a accordion title"
const bodyText = "This is paragraph text"

describe('Accordion component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Accordion header={headerText}>Accordion</Accordion>);
		expect(asFragment()).toMatchSnapshot();
	});
	test('Starts closed', async () => {
		render(<Accordion header={headerText}>{bodyText}</Accordion>);
		expect(await screen.findByText(bodyText)).not.toBeVisible();
	});
	test('Open on click when starting closed', async () => {
		const user = userEvent.setup();
		render(<Accordion header={headerText}>{bodyText}</Accordion>);

		const button = await screen.findByText(headerText)
		await user.click(button.parentElement)

		expect(await screen.findByText(bodyText)).toBeVisible();
	});
	test('Accordion with sub-header', async () => {
		const subheader = "Subheader"
		render(<Accordion header={headerText} subHeader={subheader}>{bodyText}</Accordion>);
		expect(await screen.findByText(subheader)).toBeVisible();
	});
});
