import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Card from './index';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';
import testImage from '../../media/16x9.png'

storiesOf('Card', module).addDecorator(centered)
	.add('Default', () => (
		<Card imagePlacement="left">
			<Title size={2}>Look at this</Title>
			<Paragraph>Explain something about something with something clever.</Paragraph>
			<Button primary>Handling</Button>
		</Card>
	))
	.add('With images', () => (
		<div>
			<Card imagePlacement="left" image={<img height="180px" src={testImage} alt="testImage" />}>
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
				<Button primary>Handling</Button>
			</Card>
			<div>
				<Card imagePlacement="top" image={<img height="180px" src={testImage} alt="testImage" />}>
					<Title size={2}>Look at this</Title>
					<Paragraph>Explain something about something with something clever.</Paragraph>
					<Button primary>Handling</Button>
				</Card>
			</div>
		</div>
	))
	.add('Three boxes', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 250px)', gridColumnGap: '20px' }}>
			<Card>
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
			</Card>
			<Card centered>
				<Title size={2}>Look at this</Title>
				<Paragraph>This box has the <code>centered</code> prop set to true</Paragraph>
			</Card>
			<Card fileLocation="./not_a_file.md">
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
			</Card>
		</div>
	));
