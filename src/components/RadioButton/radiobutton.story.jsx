import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import RadioButton from './index';

storiesOf('Atoms|RadioButton', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<RadioButton value="item">Item</RadioButton>
		</div>
	));
