import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown, Play } from 'react-feather';
import Button from './index';

storiesOf('Button', module).addDecorator(centered)
	.add('Primary', () => (
		<div style={{ display: 'flex' }}>
			<Button primary>Primary</Button>
			<Button primary>
				<ChevronDown size="18" /> Primary
			</Button>
			<Button primary><Play size="18" /></Button>
			<Button primary disabled>Disabled</Button>
		</div>
	))
	.add('Secondary', () => (
		<div style={{ display: 'flex' }}>
			<Button>Secondary</Button>
			<Button><ChevronDown size="18" /> Secondary</Button>
			<Button><Play size="18" /></Button>
			<Button disabled>Disabled</Button>
		</div>
	));
