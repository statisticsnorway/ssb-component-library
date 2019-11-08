import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Paragraph from './index';

storiesOf('Paragraph', module).addDecorator(centered)
	.add('Standard', () => (
		<div>
			<Paragraph>
				A paragraph is useful for wrapping text.
			</Paragraph>
			<Paragraph>
				A long text will have to be limited to 580px in width to make sure that it is easy to read and that the reader will be able to find
				the next line easily. If the lines are too long it is easy to loose track and it will become very annoying.
			</Paragraph>
		</div>
	));
