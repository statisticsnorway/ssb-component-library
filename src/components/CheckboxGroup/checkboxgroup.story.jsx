import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxGroup from './index';

const checkboxItems = [
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

storiesOf('CheckboxGroup', module)
	.add('Column', () => (
		<CheckboxGroup header="Header" items={checkboxItems} />
	))
	.add('Row', () => (
		<CheckboxGroup header="Header" items={checkboxItems} orientation="row" />
	));
