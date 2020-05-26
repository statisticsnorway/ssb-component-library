import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Globe } from 'react-feather';
import Card from './index';
import Text from '../Text';
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
	.add('Default with icon', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', display: 'flex' }}>
				<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={32} />} fileLocation="./not_a_file.md" downloadText="Download">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<br />
			<Card title="Tittel" href=" " icon={<Globe size={32} />}>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('Profiled', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', display: 'flex' }}>
				<Card title="Tittel" href=" " profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<br />
			<Card title="Tittel" href=" " hrefText="Handling" profiled>
				<Text>Explain something about something with something clever.</Text>
			</Card>
		</div>
	))
	.add('Profiled with icon', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', display: 'flex' }}>
				<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={120} />} profiled>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<br />
			<Card title="Tittel" href=" " icon={<Globe size={120} />} profiled>
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
	));
