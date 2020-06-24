import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import PictureCard from './index';
import cardImage from './cards_bilde.jpg';

const sup = (() => {
	console.log('Image link clicked');
});

storiesOf('Picture Card', module).addDecorator(centered)
	.add('Default', () => (
		<PictureCard image={cardImage} onClick={sup} type="Type" title="Tittel" />
	))
	.add('Horizontal', () => (
		<PictureCard orientation="horizontal" image={cardImage} onClick={sup} type="Type" title="Tittel" />
	));
