import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Globe } from 'react-feather';
import Card from './index';
import Button from '../Button';
import Text from '../Text';
import Title from '../Title';
import testImage from '../../media/16x9.png';

storiesOf('Card', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Card>
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
				<Button primary>Handling</Button>
			</Card>
		</div>
	))
	.add('With images', () => (
		<div>
			<Card imagePlacement="left" image={<img src={testImage} alt="testImage" />}>
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
				<Button primary>Handling</Button>
			</Card>
			<br />
			<div>
				<Card imagePlacement="top" image={<img src={testImage} alt="testImage" />}>
					<Title size={2}>Look at this</Title>
					<Text>Explain something about something with something clever.</Text>
					<Button primary>Handling</Button>
				</Card>
			</div>
		</div>
	))
	.add('Three boxes', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto, 380px)', gridRowGap: '20px' }}>
			<Card>
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
			</Card>
			<Card centered>
				<Globe size={120} style={{ marginBottom: '20px' }} />
				<Title size={2}>Look at this</Title>
				<Text>This box has the <code>centered</code> prop set to true</Text>
			</Card>
			<Card fileLocation="./not_a_file.md">
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	));
