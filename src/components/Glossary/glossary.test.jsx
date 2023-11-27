import React from 'react';
import { render } from '../../utils/test'
import Glossary from './index';

describe('Glossary', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Glossary explanation="placeholderText">Glossary</Glossary>);
		expect(asFragment()).toMatchSnapshot();
	});
});