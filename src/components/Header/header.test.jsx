import React from 'react';
import {render} from '@testing-library/react'
import Header from './index';

describe('Header', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Header><div>Content</div></Header>);
		expect(asFragment()).toMatchSnapshot ();
	});
});
