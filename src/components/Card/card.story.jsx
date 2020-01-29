import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Globe } from 'react-feather';
import Card from './index';
import Text from '../Text';
import Title from '../Title';
import testImage from '../../media/16x9.png';

storiesOf('Card', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', display: 'flex' }}>
				<Card title="Tittel" href=" ">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<br />
			<Card title="Tittel" href=" " hrefText="Handling">
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('With images left', () => (
		<div>
			<Card
				imagePlacement="left"
				image={<img src={testImage} alt="testImage" />}
				href=" "
				subTitle="Artikkel / 11. mai 2019"
				title="Tittel"
			>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('With images top', () => (
		<div>
			<Card
				imagePlacement="top"
				image={<img src={testImage} alt="testImage" />}
				href=" "
				subTitle="Artikkel / 11. mai 2019"
				title="Tittel"
			>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('Three boxes', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto, 380px)', gridRowGap: '20px' }}>
			<Card href=" ">
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
			</Card>
			<Card centered href=" ">
				<Globe size={120} style={{ marginBottom: '20px' }} />
				<Title size={2}>Look at this</Title>
				<Text>This box has the <code>centered</code> prop set to true</Text>
			</Card>
			<Card href=" " fileLocation="./not_a_file.md" downloadText="Download">
				<Title size={2}>Look at this</Title>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	));
