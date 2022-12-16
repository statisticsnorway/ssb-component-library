/* eslint-disable react/no-unescaped-entities */
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
	))
	.add('**Default/Profiled Card med tittel', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Uten å ha lagt noen ekstra attributter: kun Title</p>
				<Card href=" " external title="Title">
					<Text>Explain something about something with a title about danger.</Text>
				</Card>
			</div>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Hvis man legger på attributt ariaLabel="Dette er arialabel":  Dette er en ariaLabel</p>
				<Card href=" " external title="Title" ariaLabel="This is a aria label">
					<Text>Explain something about something with a title about danger.</Text>
				</Card>
			</div>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Hvis man legger på attributt ariaDescribedBy="text": Title + Text ( Explain something….)</p>
				<Card href=" " external title="Title" ariaDescribedBy="text">
					<Text>Explain something about something with a title about danger.</Text>
				</Card>
			</div>
		</div>
	))
	.add('**Default/Profiled Card without title, but with hrefText', () => (
		<div style={{ width: '1200px', display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Uten å ha lagt noen ekstra attributter: Gå til en annen side</p>
				<Card href=" " icon={<Globe size={120} />} profiled external hrefText="Go to external page">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Hvis man legger på attributt ariaLabel="This is aria label":  This is aria label</p>
				<Card href=" " icon={<Globe size={120} />} profiled external hrefText="Go to external page" ariaLabel="This is aria label">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Hvis man legger på attributt ariaDescribedBy="text": Gå til en annen side + Text ( Explain something….)</p>
				<Card href=" " icon={<Globe size={120} />} profiled external hrefText="Go to external page" ariaDescribedBy="text">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div style={{ width: '380px', marginLeft: '10px' }}>
				<p>Hvis man legger på og ariaDescribedBy med titel og hrefText</p>
				<Card title="Title" href=" " icon={<Globe size={120} />} profiled external ariaDescribedBy="text">
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	))
	.add('**Card with images', () => (
		<div style={{ width: '800px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
			<div>
				<p>Uten å ha lagt noen ekstra attributter: Gå til en annen side / tittel ?? </p>
				<Card
					imagePlacement="left"
					image={<img src="/16x9.png" alt="testImage" />}
					href=" "
					subTitle="Artikkel / 11. mai 2019"
					title="Title"
				>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div>
				<p>Hvis man legger på attributt ariaLabel="This is aria label": This is aria label</p>
				<Card
					imagePlacement="left"
					image={<img src="/16x9.png" alt="testImage" />}
					href=" "
					subTitle="Artikkel / 11. mai 2019"
					title="Title"
					ariaLabel="This is aria label"
				>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
			<div>
				<p><s>Hvis man legger på attributt ariaDescribedBy="subtitle": Tittel + Artikkel / 11. mai 2019 </s> (Hvis man ønsker å
					endre hvordan dato leses opp må man heller bruke ariaLabel til å sette sammen Tittel og subtitle slik man ønsker)
				</p>
				<Card
					imagePlacement="left"
					image={<img src="/16x9.png" alt="testImage" />}
					href=" "
					subTitle="Artikkel / 11. mai 2019"
					title="Title"
					ariaLabel="Title Artikkel / 11. mai 2019"
				>
					<Text>Explain something about something with something clever.</Text>
				</Card>
			</div>
		</div>
	));
