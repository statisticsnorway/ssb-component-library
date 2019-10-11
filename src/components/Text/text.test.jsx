import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Text from './index';
import { ssbWhite } from '../../style/colors';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Text>Default text here</Text>).toJSON();
		expect(component).toMatchSnapshot();
	});

	test('Changes color when negative', () => {
		const component = renderer.create(<Text negative>Here is a text</Text>).toJSON();
		expect(component).toHaveStyleRule('color', ssbWhite);
	});

	test('Changes font size when `small` is true', () => {
		const component = renderer.create(<Text small>Small text here</Text>).toJSON();
		expect(component).toHaveStyleRule('font-size', '14px');
	});
});
