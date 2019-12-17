import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Header from './index';
import Tabs from '../Tabs';
import Divider from '../Divider';
import Link from '../Link';
import SsbLogo from '../../media/ssb-logo-black.svg';
import Input from '../Input';

const items = [
	{
		title: 'Category 1',
		path: 'category1/',
	},
	{
		title: 'Category 2',
		path: 'category2/',
	},
	{
		title: 'Category 3',
		path: 'category3/',
	},
	{
		title: 'Category 4',
		path: 'category4/',
	},
];

storiesOf('Header', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '1200px' }}>
			<Header>
				<div className="global-links">
					<ul className="link-list">
						<li><Link href=" ">top-item 3</Link></li>
						<li><Link href=" ">top-item 2</Link></li>
						<li><Link href=" ">top-item 1</Link></li>
					</ul>
				</div>
				<div className="top-row flex-row justify-space-between flex-wrap">
					<SsbLogo alt="ssb-logo" />
					<div className="searchfield">
						<Input ariaLabel="Input field Search" searchField placeholder="Search text" />
					</div>
				</div>
				<div className="header-content">
					<Tabs items={items} />
					<Divider />
				</div>
			</Header>
		</div>
	));
