import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Accordion from './index';
import NestedAccordion from '../NestedAccordion';

const mockText = `This is paragraph text which explains the accordion,
 the rest of the text is just to fill it out and show the space it takes.`;

storiesOf('Accordion', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', width: '500px' }}>
			<Accordion header="This is a accordion title">
				This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
			</Accordion>
		</div>
	))
	.add('With sub-header', () => (
		<div style={{ display: 'flex', width: '500px' }}>
			<Accordion subHeader="Tabell 1" header="This is a accordion title with a sub-header">
				This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
			</Accordion>
		</div>
	))
	.add('With nested accordions', () => (
		<div style={{ display: 'flex', width: '500px' }}>
			<Accordion header="This is a accordion with nested accordions">
				<div>{mockText}</div>
				<NestedAccordion header="A nested accordion header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</NestedAccordion>
			</Accordion>

		</div>
	))
	.add('Without borders', () => (
		<div style={{ display: 'flex', width: '500px' }}>
			<Accordion withoutBorders header="This is a accordion title without borders">
				This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
			</Accordion>
		</div>
	))
	.add('Multiple w/ sub-header', () => (
		<div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
			<Accordion subHeader="Tabell 1" header="This is a accordion title with a sub-header, her you can see the text in an extra row width a 6 column max lenght">
				This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
			</Accordion>
			<Accordion subHeader="Tabell 2" header="This is a accordion title with a sub-header">
				This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
			</Accordion>
			<Accordion subHeader="Tabell 3" header="This is a accordion with nested accordions">
				<NestedAccordion header="A nested accordion header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</NestedAccordion>
			</Accordion>
		</div>
	));
