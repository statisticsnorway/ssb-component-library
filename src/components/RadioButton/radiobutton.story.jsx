import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './index';

storiesOf('RadioButton', module)
	.add('Default', () => (
		<div>
			<RadioButton value="item">Item</RadioButton>
		</div>
	));
