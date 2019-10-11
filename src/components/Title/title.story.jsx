import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Title from './index';

storiesOf('Title', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Title size={1}>This is a h1 title</Title>
			<Title size={2}>This is a h2 title</Title>
			<Title size={3}>This is a h3 title</Title>
			<Title size={4}>This is a h4 title</Title>
			<Title size={5}>This is a h5 title</Title>
			<Title size={6}>This is a h6 title</Title>
		</div>
	));
