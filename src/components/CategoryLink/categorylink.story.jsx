import React from 'react';
import { storiesOf } from '@storybook/react';
import CategoryLink from './index';

storiesOf('CategoryLink', module)
	.add('Default', () => (
		<div style={{ width: '1200px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '580px', marginRight: '20px' }}>
				<CategoryLink href=" " titleText="Category link with description" subText="Description goes here" />
			</div>
			<div style={{ width: '580px' }}>
				<CategoryLink href=" " titleText="Category link with description" subText="Description goes here" />
			</div>
		</div>
	));
