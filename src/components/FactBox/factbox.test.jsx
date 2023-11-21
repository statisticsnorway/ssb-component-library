import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import FactBox from './index';

describe('FactBox component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<FactBox header="fact box header" text="fact box Text"  />);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('set openByDefault', () => {
		const wrapper = shallow(<FactBox header="fact box header" text="fact box Text" openByDefault />);
		expect(wrapper.find('Accordion').props().openByDefault).toEqual(true);
	});

});
