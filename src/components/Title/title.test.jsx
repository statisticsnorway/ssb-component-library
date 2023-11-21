import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Title from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Title>Title</Title>);
		expect(asFragment()).toMatchSnapshot ();
	});

	test('Renders children', () => {
		const wrapper = shallow(<Title>Hey</Title>);
		expect(wrapper.text()).toEqual('Hey');
	});

	test('Sets negative class', () => {
		const wrapper = shallow(<Title negative>Title</Title>);
		expect(wrapper.find('.ssb-title').hasClass('negative')).toEqual(true);
	});

	test('Sets custom class', () => {
		const wrapper = shallow(<Title className="some-class">Title</Title>);
		expect(wrapper.find('.ssb-title').hasClass('some-class')).toEqual(true);
	});

	test('Renders correct default size', () => {
		const wrapper = shallow(<Title>Title</Title>);
		expect(wrapper.find('h1').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={1}>Title</Title>);
		expect(wrapper.find('h1').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={2}>Title</Title>);
		expect(wrapper.find('h2').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={3}>Title</Title>);
		expect(wrapper.find('h3').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={4}>Title</Title>);
		expect(wrapper.find('h4').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={5}>Title</Title>);
		expect(wrapper.find('h5').exists()).toEqual(true);
	});

	test('Renders correct size', () => {
		const wrapper = shallow(<Title size={6}>Title</Title>);
		expect(wrapper.find('h6').exists()).toEqual(true);
	});

});
