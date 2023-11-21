import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Highlight from './index';

describe('Highlight component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Highlight>«Highlight»</Highlight>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Highlight negative>«Highlight»</Highlight>);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
