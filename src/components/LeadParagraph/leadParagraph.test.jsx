import React from 'react';
import renderer from 'react-test-renderer';
import LeadParagraph from './index';

describe('LeadParagraph component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<LeadParagraph>Leading paragraph</LeadParagraph>).toJSON();
		expect(component).toMatchSnapshot();
	});
});
