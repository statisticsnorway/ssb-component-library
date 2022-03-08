import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

let someValue = '';
const handleChange = e => {
	someValue = e;
};

const handleSubmit = e => {
	console.log(e);
};

storiesOf('Input', module)
	.add('Default', () => (
		<div style={{ width: '280px' }}>
			<Input label="Input field" value={someValue} handleChange={handleChange} />
		</div>
	))
	.add('Search field', () => (
		<div style={{ width: '280px' }}>
			<Input ariaLabel="Input field Search" ariaLabelSearchButton="Search" searchField submitCallback={handleSubmit} placeholder="Search text" />
		</div>
	))
	.add('With value', () => (
		<div style={{ width: '280px' }}>
			<Input label="Input field" value="Already filled" />
		</div>
	))
	.add('Disabled', () => (
		<div style={{ width: '280px' }}>
			<Input label="Input field" disabled />
		</div>
	))
	.add('Error', () => (
		<div style={{ width: '280px' }}>
			<Input label="Input field" error errorMessage="Beklager, dette er feil" />
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
			<Input label="Input field" negative value={someValue} handleChange={handleChange} />
			<Input label="Input field" negative searchField submitCallback={handleSubmit} placeholder="Search text" />
			<Input label="Input field" negative value={someValue} error errorMessage="Beklager, dette er feil" />
		</div>
	))
	.add('Large input', () => (
		<div style={{
			width: '980px',
			height: '240px',
			background: '#ecfeed',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<Input searchField size="lg" placeholder="Søk" />
		</div>
	));
