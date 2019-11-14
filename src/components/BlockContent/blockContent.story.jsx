import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import BlockContent from './index';
import Title from '../Title';
import LeadParagraph from '../LeadParagraph';

storiesOf('BlockContent', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '900px' }}>
			<BlockContent sectionNumber={1}>
				<Title noMargin size={1}>Overskrift</Title>
				<LeadParagraph>Her er det så mye innhold at man bør innlede</LeadParagraph>
			</BlockContent>
		</div>
	));
