import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';

storiesOf('Text', module)
	.add('Default', () => (
		<Text>Default text here</Text>
	))
	.add('Small', () => (
		<Text small>Small text here</Text>
	))
	.add('Negative', () => (
		<Text negative>Negative text here</Text>
	));
