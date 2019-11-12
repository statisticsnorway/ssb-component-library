import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import RadioGroup from './index';

const radioItems = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
		disabled: 'true',
	},
];

storiesOf('RadioGroup', module).addDecorator(centered)
	.add('Column', () => (
		<RadioGroup header="Header" items={radioItems} />
	)).add('Row', () => (
		<RadioGroup header="Header" items={radioItems} orientation="row" />
	));
