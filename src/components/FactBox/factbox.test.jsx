import React from 'react';
import { screen, render } from '../../utils/test'
import FactBox from './index';

describe('FactBox component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<FactBox header="fact box header" text="fact box Text"  />);
		expect(asFragment()).toMatchSnapshot();
	});
	test('set openByDefault', async () => {
		const text = 'fact box Text';
		render(<FactBox header="fact box header" text={text} openByDefault />);

		expect(await screen.findByText(text)).toBeVisible();
	});
});
