import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from './index';
import { ssbWhite } from '../../style/colors';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Title>Default title here</Title>).toJSON();
		expect(component).toMatchSnapshot();
	});

	test('Changes color when negative', () => {
		const component = renderer.create(<Title negative>Here is negative title</Title>).toJSON();
		expect(component).toHaveStyleRule('color', ssbWhite);
	});

	test('Changes element with size', () => {
		const component = renderer.create(<Title size={2}>Here is negative title</Title>).toJSON();
		expect(component.children[0].type).toEqual('h2');
	});

	test('Changes element with size', () => {
		const component = renderer.create(<Title size={3}>Here is negative title</Title>).toJSON();
		expect(component.children[0].type).toEqual('h3');
	});

	test('Changes element with size', () => {
		const component = renderer.create(<Title size={4}>Here is negative title</Title>).toJSON();
		expect(component.children[0].type).toEqual('h4');
	});

	test('Changes element with size', () => {
		const component = renderer.create(<Title size={5}>Here is negative title</Title>).toJSON();
		expect(component.children[0].type).toEqual('h5');
	});

	test('Changes element with size', () => {
		const component = renderer.create(<Title size={6}>Here is negative title</Title>).toJSON();
		expect(component.children[0].type).toEqual('h6');
	});

});
