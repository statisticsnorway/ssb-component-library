import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Quote from './index';

describe('Quote component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Quote>«Quote»</Quote>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Quote negative>«Quote»</Quote>);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
