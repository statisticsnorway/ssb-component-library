import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import LeadParagraph from './index';

describe('LeadParagraph component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<LeadParagraph>Leading paragraph</LeadParagraph>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles className correctly', () => {
		const wrapper = shallow(<LeadParagraph negative>Leading paragraph</LeadParagraph>);
		expect(wrapper.find('.ssb-lead-paragraph').hasClass('negative')).toEqual(true);
	})
});
