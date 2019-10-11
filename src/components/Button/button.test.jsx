import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Button from './index';
import { ssbDark2, ssbGreen4, ssbWhite } from '../../style/colors';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Button text="Button" />).toJSON();
		expect(component).toMatchSnapshot();
	});

	test('Changes background if it is a primary button', () => {
		const component = renderer.create(<Button text="Button" primary />).toJSON();
		expect(component).toHaveStyleRule('background', ssbGreen4);
	});

	test('Primary button changes background if disabled', () => {
		const component = renderer.create(<Button text="Button" primary disabled />).toJSON();
		expect(component).toHaveStyleRule('background', ssbDark2);
		expect(component).toHaveStyleRule('color', ssbWhite);
	});

	test('Regular button changes background if disabled', () => {
		const component = renderer.create(<Button text="Button" disabled />).toJSON();
		expect(component).toHaveStyleRule('background', ssbWhite);
		expect(component).toHaveStyleRule('color', ssbDark2);
	});
});
