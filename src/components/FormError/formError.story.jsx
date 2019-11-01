import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import FormError from './index';

const errorMessages = [
	'Not a valid email',
	'Select a country',
	'Feed the dog',
];

storiesOf('FormError', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '500px' }}>
			<FormError errorMessages={errorMessages} title="Some fields are not right!" />
		</div>
	));
