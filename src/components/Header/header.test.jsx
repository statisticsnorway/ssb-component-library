import React from 'react';
import { render } from '../../utils/test'
import Header from './index';

describe('Header', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Header><div>Content</div></Header>);
		expect(asFragment()).toMatchSnapshot();
	});
});
