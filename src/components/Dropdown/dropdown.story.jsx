import React from 'react';
import { Search } from 'react-feather';
import Dropdown from './index';

const items = [
	{
		title: 'Apples',
		id: 'item1',
	},
	{
		title: 'Rainbows',
		id: 'item2',
	},
	{
		title: 'Ocean',
		id: 'item3',
	},
	{
		title: 'Automobiles and other fun things to talk about',
		id: 'item4',
	},
	{
		title: 'Banan',
		id: 'item5',
		disabled: true,
	},
	{
		title: 'Appelsin',
		id: 'item6',
	},
	{
		title: 'Fersken',
		id: 'item7',
	},
	{
		title: 'Mandarin orange',
		id: 'item8',
	},
];

export default {
	title: 'Dropdown',
};

export const Standard = () => <Dropdown header="Menu header" items={items} />;

export const PreSelectedValue = () => (
	<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />
);

PreSelectedValue.story = {
	name: 'Pre-selected value',
};

export const OpenedByDefault = () => <Dropdown header="Menu header" items={items} open />;

OpenedByDefault.story = {
	name: 'Opened by default',
};

export const Searchable = () => (
	<Dropdown header="Menu header" searchable items={items} placeholder="Search and select" />
);

export const StandardWithError = () => (
	<Dropdown
		header="Menu header"
		selectedItem={{ title: 'Choose fruit', id: '' }}
		items={items}
		error
		errorMessage="You must choose a fruit"
	/>
);

StandardWithError.story = {
	name: 'Standard with error',
};

export const CustomIcon = () => (
	<Dropdown
		header="Menu header"
		searchable
		items={items}
		placeholder="Search and select"
		icon={<Search />}
	/>
);

CustomIcon.story = {
	name: 'Custom icon',
};

export const LargeStandard = () => (
	<div
		style={{
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
);

export const LargeSearchable = () => (
	<div
		style={{
			width: '1000px',
			height: '240px',
			background: '#ecfeed',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<Dropdown
			header="Menu header"
			searchable
			items={items}
			placeholder="Search and select"
			largeSize
		/>
	</div>
);
