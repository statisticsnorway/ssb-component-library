import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Header', module)
	.add('Default', () => (
		<div style={{ width: '1200px' }}>
			<Header>
				<div className="global-links" style={{ float: 'right', marginBottom: '12px', marginTop: '10px' }}>
					<Link href=" ">top-item 3</Link>
					<Link href=" ">top-item 2</Link>
					<Link href=" ">top-item 1</Link>
				</div>
				<div className="top-row flex-row justify-space-between flex-wrap" style={{ width: '100%' }}>
					<SsbLogo alt="ssb-logo" />
					<div className="searchfield" style={{ width: '285px', alignSelf: 'flex-end' }}>
						<Input ariaLabel="Input field Search" searchField placeholder="Search text" />
					</div>
				</div>
				<div className="header-content" style={{ marginBottom: '20px', marginTop: '14px' }}>
					<Tabs items={items} />
					<Divider />
				</div>
			</Header>
		</div>
	));
