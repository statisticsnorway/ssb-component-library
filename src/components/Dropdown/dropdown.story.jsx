import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown, Home } from 'react-feather';
import Dropdown from './index';

const items = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
	}, {
		title: 'Ocean',
		id: 'item3',
	}, {
		title: 'Automobiles',
		id: 'item4',
	}, {
		title: 'Banan',
		id: 'item5',
	}, {
		title: 'Appelsin',
		id: 'item6',
	}, {
		title: 'Fersken',
		id: 'item7',
	}, {
		title: 'Mandarin',
		id: 'item8',
	},
];

storiesOf('Dropdown', module).addDecorator(centered)
	.add('Standard', () => (
		<Dropdown header="Menu header" icon={<ChevronDown />} items={items} />
	))
	.add('Pre-selected value', () => (
		<Dropdown header="Menu header" icon={<ChevronDown />} selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />
	))
	.add('Searchable', () => (
		<Dropdown header="Menu header" icon={<ChevronDown />} searchable items={items} placeholder="Search and select" />
	));
