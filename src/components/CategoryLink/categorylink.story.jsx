import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import CategoryLink from './index';

storiesOf('CategoryLink', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<CategoryLink href=" " titleText="Category link with description" subText="Description goes here" />
		</div>
	));
