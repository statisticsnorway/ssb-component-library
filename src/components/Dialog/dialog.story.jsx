import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Dialog from './index';

const placeholderText = `
Here you can write a informative text and inform the user of what has happened.
In the instance the informative warning is regarding moved statistics or diagrams,
please attach a link to where the data can be found. `;

storiesOf('Dialog', module).addDecorator(centered)
	.add('Info', () => (
		<div>
			<Dialog
				title="This article has been moved"
			>{placeholderText}
			</Dialog>
		</div>
	))
	.add('Warning', () => (
		<div>
			<Dialog
				title="Be aware of the dog"
				type="warning"
			>{placeholderText}
			</Dialog>
		</div>
	));
