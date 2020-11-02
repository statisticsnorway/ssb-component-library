import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Highlight from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
};

storiesOf('Highlight', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ padding: '100px' }}>
			<p>
				«Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger
				<Highlight>
					hvis du ikke er så heldig å arve
				</Highlight>
				– selv om også dét kan være dyrt.»
			</p>
		</div>
	))
	.add('Negative', () => (
		<div style={negativeStyle}>
			<p>
				«Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger
				<Highlight negative>
					hvis du ikke er så heldig å arve
				</Highlight>
				– selv om også dét kan være dyrt.»
			</p>
		</div>
	));
