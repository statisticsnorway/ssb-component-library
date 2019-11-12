import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from './index';
import Divider from '../Divider';
import NestedAccordion from '../NestedAccordion';

const mockText = `This is paragraph text which explains the accordion,
 the rest of the text is just to fill it out and show the space it takes.`;

storiesOf('Accordion', module)
	.add('Default', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion primary header="This is a accordion title">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('With sub-header', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion primary subHeader="Tabell 1" header="This is a accordion title with a sub-header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('With nested accordions', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion header="This is a secondary header">
					<div style={{ marginBottom: '10px' }}>{mockText}</div>
					<NestedAccordion header="A nested accordion header">
						This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
					</NestedAccordion>
				</Accordion>
			</div>
		</div>
	))
	.add('Multiple w/ sub-header', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Divider className="mb-1" light />
				<Accordion primary subHeader="Tabell 1" header="This is a accordion title with a sub-header, her you can see the text in an extra row width a 6 column max lenght">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
				<Divider className="mb-1 mt-1" light />
				<Accordion primary subHeader="Tabell 2" header="This is a accordion title with a sub-header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
				<Divider className="mb-1 mt-1" light />
				<Accordion primary subHeader="Tabell 3" header="This is a accordion">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
				<Divider className="mt-1" light />
			</div>
		</div>
	));
