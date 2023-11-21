import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import ButtonTertiary from './index';

describe('Button Tertiary component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<ButtonTertiary>Button</ButtonTertiary>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Applies negative class correctly', () => {
    const wrapper = shallow(<ButtonTertiary negative={true}>Button</ButtonTertiary>);
    expect(wrapper.find('.ssb-btn-tertiary').hasClass('negative')).toEqual(true);
  });
	test('Disables button when prop is true', () => {
    const wrapper = shallow(<ButtonTertiary id={'1'} disabled={true}>Button</ButtonTertiary>);
    expect(wrapper.find('button#accordion-button-1').props().disabled).toEqual(true);
  });
  test('Renders correct header text', () => {
    const wrapper = shallow(<ButtonTertiary header='Click Me!'>Button</ButtonTertiary>);
    expect(wrapper.find('.header-text').text()).toEqual('Click Me!');
  });
  
	test('Manages open/close state', () => {
    const wrapper = shallow(<ButtonTertiary id={'1'} openByDefault={true}>Button</ButtonTertiary>);
    expect(wrapper.find('.accordion-body').hasClass('open')).toEqual(true);
    
    wrapper.find('button#accordion-button-1').simulate('click');
    expect(wrapper.find('.accordion-body').hasClass('closed')).toEqual(true);
  });
  test('Renders toggle icon when accordion prop is true', () => {
    const wrapper = shallow(<ButtonTertiary accordion={true}>Button</ButtonTertiary>);
    expect(wrapper.find('.expand-icon').exists()).toEqual(true);
  });
});