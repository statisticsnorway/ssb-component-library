import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Checkbox from './index';

storiesOf('Checkbox', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex' }}>
			<Checkbox value="item">Item</Checkbox>
		</div>
	));
