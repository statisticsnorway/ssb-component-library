import React from 'react';
import { storiesOf } from '@storybook/react';
import PictureCard from './index';
// import cardImage from './cards_bilde.jpg';

const sup = (() => {
	console.log('Image link clicked');
});

storiesOf('Picture Card', module)
	.add('Default', () => (
		<PictureCard imageSrc="/cards_bilde.jpg" altText="img alt" onClick={sup} type="Type" title="Tittel" />
	))
	.add('Horizontal', () => (
		<PictureCard orientation="horizontal" imageSrc="/cards_bilde.jpg" altText="img alt" onClick={sup} type="Type" title="Tittel" />
	));
