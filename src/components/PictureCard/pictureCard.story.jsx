import React from 'react';
import PictureCard from './index';
// import cardImage from './cards_bilde.jpg';

const sup = () => {
	console.log('Image link clicked');
};

export default {
	title: 'Picture Card',
};

export const Default = () => (
	<PictureCard
		imageSrc="/cards_bilde.jpg"
		altText="img alt"
		onClick={sup}
		type="Type"
		title="Tittel"
	/>
);

export const Horizontal = () => (
	<PictureCard
		orientation="horizontal"
		imageSrc="/cards_bilde.jpg"
		altText="img alt"
		onClick={sup}
		type="Type"
		title="Tittel"
	/>
);
