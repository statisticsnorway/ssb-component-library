import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from './index';
import NestedAccordion from '../NestedAccordion';

const mockText = `This is paragraph text which explains the accordion,
 the rest of the text is just to fill it out and show the space it takes.`;

storiesOf('Accordion', module)
	.add('Default', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion header="This is a accordion title">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('With sub-header', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion subHeader="Tabell 1" header="This is a accordion title with a sub-header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('With nested accordions', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion header="This is a accordion with nested accordions">
					<div style={{ marginBottom: '10px' }}>{mockText}</div>
					<NestedAccordion header="A nested accordion header">
						This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
					</NestedAccordion>
				</Accordion>
			</div>
		</div>
	))
	.add('Without borders', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion withoutBorders header="This is a accordion title without borders">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('Multiple w/ sub-header', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
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
		</div>
	));
