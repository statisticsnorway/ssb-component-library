import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Button from './index';
import { ssbDark2, ssbGreen4, ssbWhite } from '../../style/colors';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const button = renderer.create(<Button text="Button" />).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Changes background if it is a primary button', () => {
		const button = renderer.create(<Button text="Button" primary />).toJSON();
		expect(button).toHaveStyleRule('background', ssbGreen4);
	});

	test('Primary button changes background if disabled', () => {
		const button = renderer.create(<Button text="Button" primary disabled />).toJSON();
		expect(button).toHaveStyleRule('background', ssbDark2);
		expect(button).toHaveStyleRule('color', ssbWhite);
	});

	test('Regular button changes background if disabled', () => {
		const button = renderer.create(<Button text="Button" disabled />).toJSON();
		expect(button).toHaveStyleRule('background', ssbWhite);
		expect(button).toHaveStyleRule('color', ssbDark2);
	});
});
