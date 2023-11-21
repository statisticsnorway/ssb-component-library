import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import StickyMenu from './index';

describe('StickyMenu component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<StickyMenu>StickyMenu</StickyMenu>);
		expect(asFragment()).toMatchSnapshot ();
	});
});
