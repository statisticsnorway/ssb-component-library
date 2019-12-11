import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown } from 'react-feather';
import Button from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, auto)',
	gridColumnGap: '20px',
};

storiesOf('Button', module).addDecorator(centered)
	.add('Primary', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
			<Button primary>Primary button</Button>
			<Button icon={<ChevronDown size={18} />} primary>Primary icon</Button>
			<Button primary disabled>Disabled button</Button>
		</div>
	))
	.add('Secondary', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
			<Button className="mr-4">Secondary button</Button>
			<Button className="mr-4" icon={<ChevronDown size={18} />}>Secondary icon</Button>
			<Button disabled>Disabled button</Button>
		</div>
	))
	.add('Primary - Negative', () => (
		<div style={negativeStyle}>
			<Button className="mr-4" negative primary>Primary button</Button>
			<Button className="mr-4" icon={<ChevronDown size={18} />} negative primary>Primary icon</Button>
			<Button negative primary disabled>Disabled button</Button>
		</div>
	))
	.add('Secondary - Negative', () => (
		<div style={negativeStyle}>
			<Button className="mr-4" negative>Secondary button</Button>
			<Button className="mr-4" icon={<ChevronDown size={18} />} negative>Secondary icon</Button>
			<Button negative disabled>Disabled button</Button>
		</div>
	));
