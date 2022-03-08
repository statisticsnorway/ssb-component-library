import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Globe } from 'react-feather';
import Card from './index';
import Text from '../Text';

storiesOf('Card', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '380px', marginRight: '10px' }}>
				<Card title="Tittel" href=" ">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '380px' }}>
				<Card title="Tittel" href=" " hrefText="Handling">
					<Text>Explain something about something with something clever. Men denne har mye mere tekst så den kommer til å bli lengre</Text>
				</Card>
			</div>
		</div>
	))
	.add('Default with icon', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', width: '400px' }}>
				<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={32} />} fileLocation="./not_a_file.md" downloadText="Download">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '400px' }}>
				<Card title="Tittel" href=" " icon={<Globe size={32} />}>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	))
	.add('Profiled', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', width: '400px' }}>
				<Card title="Tittel" href=" " profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '400px' }}>
				<Card title="Tittel" href=" " hrefText="Handling" profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	))
	.add('Profiled with icon', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', width: '400px' }}>
				<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={120} />} profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '400px' }}>
				<Card title="Tittel" href=" " icon={<Globe size={120} />} profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	))
	.add('External with icon', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', width: '400px' }}>
				<Card title="Tittel" href=" " icon={<Globe size={120} />} profiled external>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '400px' }}>
				<Card title="Tittel" href=" " icon={<Globe size={120} />} profiled external hrefText="Handling">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	))
	.add('With images left', () => (
		<div>
			<Card
				imagePlacement="left"
				image={<img src="/16x9.png" alt="testImage" />}
				href=" "
				subTitle="Artikkel / 11. mai 2019"
				title="Tittel"
			>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('With images top', () => (
		<div style={{ width: '380px' }}>
			<Card
				imagePlacement="top"
				image={<img src="/16x9.png" alt="testImage" />}
				href=" "
				subTitle="Artikkel / 11. mai 2019"
				title="Tittel"
			>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	));
