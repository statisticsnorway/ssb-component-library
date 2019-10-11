import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Paragraph from './index';

storiesOf('Paragraph', module).addDecorator(centered)
	.add('Standard', () => (
		<Paragraph>
			A paragraph is useful for wrapping text.
		</Paragraph>
	));
