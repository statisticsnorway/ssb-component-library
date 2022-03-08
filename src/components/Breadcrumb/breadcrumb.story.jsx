import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index';

const mockedItems = [
	{
		link: ' ',
		text: 'breadcrumb 1',
	},
	{
		link: ' ',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
	},
];

storiesOf('Breadcrumb', module)
	.add('Default', () => (
		<div>
			<Breadcrumb items={mockedItems} />
		</div>
	));
