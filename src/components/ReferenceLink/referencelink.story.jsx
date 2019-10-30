import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ReferenceLink from './index';

storiesOf('ReferenceLink', module).addDecorator(centered)
	.add('Regular', () => (
		<div>
			<ReferenceLink title="Source" linkText="Source link" href=" " />
		</div>
	))
	.add('With paragraph', () => (
		<div>
			<ReferenceLink title="Source" linkText="Some kinda reference link" paragraphText="Paragraph text before link" href=" " />
		</div>
	));
