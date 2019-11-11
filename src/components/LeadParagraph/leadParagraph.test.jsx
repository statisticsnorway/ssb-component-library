import React from 'react';
import {shallow} from 'enzyme';
import LeadParagraph from './index';

describe('LeadParagraph component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<LeadParagraph>Leading paragraph</LeadParagraph>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles className correctly', () => {
		const wrapper = shallow(<LeadParagraph negative>Leading paragraph</LeadParagraph>);
		expect(wrapper.find('.ssb-lead-paragraph').hasClass('negative')).toEqual(true);
	})
});
