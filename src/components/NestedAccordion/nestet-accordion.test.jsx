import React from 'react';
import {shallow} from 'enzyme';
import NestedAccordion from './index';

describe('NestedAccordion component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<NestedAccordion header="A nested accordion header">Nestet accordion</NestedAccordion>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Change classname to open on click', () => {
		const wrapper = shallow(<NestedAccordion header="A nested accordion header">Nestet accordion</NestedAccordion>);
		wrapper.find('.nested-accordion-header').simulate('click');
		expect(wrapper.find('.nested-accordion-header').hasClass('open')).toEqual(true);
		expect(wrapper.find('.nested-accordion-body').hasClass('open')).toEqual(true);
	});

});
