import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import KeyFigures from './index';
import Divider from '../Divider';
import HouseIcon from '../../media/house-icon.svg';

const title = 'Antall husholdninger';
const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('KeyFigures', module).addDecorator(centered)
	.add('Large', () => (
		<div>
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="large"
				icon={<HouseIcon alt="house" />}
				wordExplanation={placeholderText}
			/>
		</div>
	))
	.add('Medium', () => (
		<div>
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="medium"
				icon={<HouseIcon alt="house" />}
			/>
		</div>
	))
	.add('Small', () => (
		<div style={{ width: '400px' }}>
			<KeyFigures
				number="789"
				title="Antall plasser i helse- og omsorgsinstitusjoner"
				numberDescription="plasser"
				time="2018"
				size="small"
				icon={<HouseIcon alt="house" />}
			/>
		</div>
	))
	.add('Without icon', () => (
		<div>
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="large"
				wordExplanation={placeholderText}
			/>
			<br />
			<Divider />
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="medium"
			/>
			<br />
			<Divider />
			<KeyFigures
				number="789"
				title="Antall plasser i helse- og omsorgsinstitusjoner"
				numberDescription="plasser"
				time="2018"
				size="small"
			/>
		</div>
	))
	.add('Without number', () => (
		<KeyFigures
			title="Antall plasser i helse- og omsorgsinstitusjoner"
			numberDescription="plasser"
			time="2018"
			size="small"
			icon={<HouseIcon alt="house" />}
		/>
	));
