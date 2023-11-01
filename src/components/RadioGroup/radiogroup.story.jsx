import React from 'react';
import RadioGroup from './index';

const radioItems = [
	{
		label: 'Item 1',
		value: 'item1',
	},
	{
		label: 'Item 2',
		value: 'item2',
	},
	{
		label: 'Item 3',
		value: 'item3',
		disabled: 'true',
	},
];

export default {
	title: 'RadioGroup',
};

export const Column = () => <RadioGroup header="Header" items={radioItems} />;

export const Row = () => <RadioGroup header="Header" items={radioItems} orientation="row" />;
