import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Quote from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
};

storiesOf('Quote', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{padding: '100px'}}>
			<Quote>
				«Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger hvis du ikke er så heldig å arve – selv om også dét kan være dyrt.»
			</Quote>
		</div>
	))
	.add('Negative', () => (
		<div style={negativeStyle}>
			<Quote	negative>
				«Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger hvis du ikke er så heldig å arve – selv om også dét kan være dyrt.»
			</Quote>
		</div>
	));
