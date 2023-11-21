import React from 'react';
import {render} from '@testing-library/react'
import CategoryLink from './index';

describe('CategoryLink component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<CategoryLink href="" titleText="Category link with description" subText="Description goes here" />);
		expect(asFragment()).toMatchSnapshot ();
	});
});
