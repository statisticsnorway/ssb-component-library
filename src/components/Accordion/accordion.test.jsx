import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Accordion from './index';

describe('Accordion component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Accordion header="This is a accordion title">Accordion</Accordion>);
		expect(asFragment()).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Accordion header="This is a accordion title">This is paragraph text</Accordion>);
		expect(wrapper.find('.accordion-header').hasClass('closed')).toEqual(true);
		expect(wrapper.find('.accordion-body').hasClass('closed')).toEqual(true);
	});
	test('Change classname to open on click', () => {
		const wrapper = shallow(<Accordion header="This is a accordion title">This is paragraph text</Accordion>);
		wrapper.find('.accordion-header').simulate('click');
		expect(wrapper.find('.accordion-header').hasClass('open')).toEqual(true);
		expect(wrapper.find('.accordion-body').hasClass('open')).toEqual(true);
	});
	test('Accordion with sub-header', () => {
		const wrapper = shallow(<Accordion header="This is a accordion title" subHeader="Subheader">This is paragraph text</Accordion>);
		expect(wrapper.hasClass('with-sub-header')).toEqual(true);
		expect(wrapper.find('.sub-header').length).toBe(1);
	});
	test('Accordion with id', () => {
		const wrapper = shallow(<Accordion id="test-id" header="This is a accordion title">This is paragraph text</Accordion>);
		expect(wrapper.prop('id')).toEqual('test-id');
	});
});
