import React from 'react';
import { storiesOf } from '@storybook/react';
import { Globe } from 'react-feather';
import Card from './index';
import Text from '../Text';

storiesOf('Card', module)
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
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<Card href=" " external hrefText="Handling" title="Tittel" ariaLabel="the title" ariaDescribedBy="text">
					<Text>Explain something about something without a title.</Text>
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
	))
	.add('Card with ariaLabel and ariaDescribedBy', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ marginRight: '10px', width: '380px' }}>
				<Card
					imagePlacement="top"
					image={<img src="/16x9.png" alt="testImage" />}
					href=" "
					subTitle="Artikkel / 11. mai 2019"
					title="Dangerous Children"
					ariaLabel="Tittel - Artikkel 11. mai 2019"
					ariaDescribedBy="text"
				>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '400px' }}>
				<Card href=" " icon={<Globe size={120} />} profiled external hrefText="Gå til url" ariaLabel="Gå til url" ariaDescribedBy="text">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	));
