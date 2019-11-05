import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ProfileBox from './index';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';

storiesOf('ProfileBox', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{width: '300px'}}>
			<ProfileBox>
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
				<Button primary>Handling</Button>
			</ProfileBox>
		</div>
	))
	.add('Three boxes', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 250px)', gridColumnGap: '20px' }}>
			<ProfileBox>
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
			</ProfileBox>
			<ProfileBox centered>
				<Title size={2}>Look at this</Title>
				<Paragraph>This box has the <code>centered</code> prop set to true</Paragraph>
			</ProfileBox>
			<ProfileBox fileLocation="./not_a_file.md">
				<Title size={2}>Look at this</Title>
				<Paragraph>Explain something about something with something clever.</Paragraph>
			</ProfileBox>
		</div>
	));
