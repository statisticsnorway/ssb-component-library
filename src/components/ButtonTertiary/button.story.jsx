import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChevronDown } from 'react-feather';
import Button from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, auto)',
	gridColumnGap: '20px',
};

storiesOf('Button', module)
	.add('Tertiary', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gridColumnGap: '20px' }}>
			<Button className="mr-4">Tertiary button</Button>
			<Button className="mr-4" icon={<ChevronDown size={18} />}>Tertiary icon</Button>
		</div>
	));
