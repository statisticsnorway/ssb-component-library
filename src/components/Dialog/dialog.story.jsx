import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from './index';
import Link from '../Link';

const placeholderText = `
Here you can write a informative text and inform the user of what has happened.
In the instance the informative warning is regarding moved statistics or diagrams,
please attach a link to where the data can be found. `;

storiesOf('Dialog', module)
	.add('Info', () => (
		<Dialog
			title="This article has been moved"
		><span>{placeholderText}</span>
		</Dialog>
	))
	.add('Warning', () => (
		<Dialog
			title="Be aware of the dog"
			type="warning"
		>	<span>{placeholderText}</span>
			<Link href=" ">Look here for more info</Link>
		</Dialog>
	));
