import React from 'react';
import { storiesOf } from '@storybook/react';
import Number from './index';

storiesOf('Number', module)
	.add('Small', () => (
		<div>
			<Number size="small">599 246 391</Number>
		</div>
	))
	.add('Medium', () => (
		<div>
			<Number size="medium">59 923</Number>
		</div>
	))
	.add('Large', () => (
		<div>
			<Number size="large">789 398</Number>
		</div>
	));
