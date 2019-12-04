import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import TextArea from './index';

let someValue = '';
const handleChange = e => {
	someValue = e;
};

storiesOf('TextArea', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '500px' }}>
			<TextArea label="Label" placeholder="I can be resized..." handleChange={handleChange} value={someValue} />
		</div>
	))
	.add('Negative', () => (
		<div style={{
			width: '40em',
			height: '20em',
			background: '#274247',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<TextArea negative label="Label" handleChange={handleChange} value={someValue} />
			<TextArea negative label="Label" handleChange={handleChange} value={someValue} error errorMessage="You made a mistake, fool! What the hell" />
		</div>
	));
