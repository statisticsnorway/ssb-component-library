import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from 'react-feather';
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
		title: 'Automobiles and other fun things to talk about',
		id: 'item4',
	}, {
		title: 'Banan',
		id: 'item5',
		disabled: true,
	}, {
		title: 'Appelsin',
		id: 'item6',
	}, {
		title: 'Fersken',
		id: 'item7',
	}, {
		title: 'Mandarin orange',
		id: 'item8',
	},
];

storiesOf('Dropdown', module)
	.add('Standard', () => (
		<Dropdown header="Menu header" items={items} />
	))
	.add('Pre-selected value', () => (
		<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />
	))
	.add('Opened by default', () => (
		<Dropdown header="Menu header" items={items} open />
	))
	.add('Searchable', () => (
		<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" />
	))
	.add('Standard with error', () => (
		<Dropdown header="Menu header" selectedItem={{ title: 'Choose fruit', id: '' }} items={items} error errorMessage="You must choose a fruit" />
	))
	.add('Custom icon', () => (
		<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" icon={<Search />} />
	))
	.add('Large Standard', () => (
		<div style={{
			width: '1000px',
			height: '240px',
			background: '#ecfeed',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<Dropdown header="Menu header" placeholder="Velg frukt" items={items} largeSize />
		</div>
	))
	.add('Large Searchable', () => (
		<div style={{
			width: '1000px',
			height: '240px',
			background: '#ecfeed',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" largeSize />
		</div>
	));
