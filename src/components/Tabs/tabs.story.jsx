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

storiesOf('Tabs', module)
	.add('Tabs', () => (
		<div>
			<Tabs items={items} />
			<Divider />
		</div>
	));
