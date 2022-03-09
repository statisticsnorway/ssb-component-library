import React from 'react';
import { storiesOf } from '@storybook/react';
import LeadParagraph from './index';

storiesOf('Lead Paragraph', module)
	.add('Standard', () => (
		<LeadParagraph>
			A lead paragraph is useful for making text stand out and be more significant.
		</LeadParagraph>
	));
