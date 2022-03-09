import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';

storiesOf('Checkbox', module)
	.add('Default', () => (
		<div style={{ display: 'flex' }}>
			<Checkbox value="item">Item</Checkbox>
		</div>
	));
