import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import LeadParagraph from './index';
import { ssbWhite } from '../../style/colors';

describe('LeadParagraph component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<LeadParagraph>Leading paragraph</LeadParagraph>).toJSON();
		expect(component).toMatchSnapshot();
	});

	test('Changes color if it is a primary button', () => {
		const component = renderer.create(<LeadParagraph negative>Leading paragraph</LeadParagraph>).toJSON();
		expect(component).toHaveStyleRule('color', ssbWhite);
	});
});
