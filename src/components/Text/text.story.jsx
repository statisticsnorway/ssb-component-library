import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Text from './index';

storiesOf('Text', module).addDecorator(centered)
	.add('Default', () => (
		<Text>Default text here</Text>
	))
	.add('Small', () => (
		<Text small>Small text here</Text>
	))
	.add('Negative', () => (
		<Text className="p-2" negative>Negative text here</Text>
	));
