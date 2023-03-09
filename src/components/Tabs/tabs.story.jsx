import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from '../Divider';
import Tabs from './index';

const items = [
	{
		title: 'Get Started',
		path: 'get-started/',
	},
	{
		title: 'Components',
		path: 'components/',
	},
	{
		title: 'Templates',
		path: 'templates/',
	},
];

const items2 = [
	{
		title: 'Get Started',
		path: 'get-started/',
	},
	{
		title: 'Components',
		path: 'components/',
	},
];

storiesOf('Tabs', module)
	.add('Tabs', () => (
		<div>
			<Tabs items={items} activeOnInit="get-started/" />
			<Divider />
		</div>
	))
	.add('Tabs2', () => (
		<div>
			<Tabs items={items2} activeOnInit="get-started/" />
			<Divider />
		</div>
	));
