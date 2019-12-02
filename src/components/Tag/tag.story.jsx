import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Star } from 'react-feather';
import Tag from './index';

storiesOf('Tag', module).addDecorator(centered)
	.add('Tag', () => (
		<div>
			<Tag>Tag</Tag>
		</div>
	))
	.add('Tag with icon', () => (
		<div>
			<Tag icon={<Star size={18} />}>Tag with icon</Tag>
		</div>
	));
