import React from 'react';
import {render} from '@testing-library/react'
import Glossary from './index';

describe('Glossary', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Glossary explanation="placeholderText">Glossary</Glossary>);
		expect(asFragment()).toMatchSnapshot ();
	});
});