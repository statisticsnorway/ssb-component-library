import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ImageLink from './index';
import doge from './doge.png';
import jokeDog from './jokeDog.png';

const sup = (() => {
	console.log('Image link clicked');
});

storiesOf('Image Link', module).addDecorator(centered)
	.add('Default', () => (
		<ImageLink image={<img src={jokeDog} alt="" />} onClick={sup} type="Type" title="Tittel" />
	))
	.add('Horizontal', () => (
		<ImageLink orientation="horizontal" image={<img src={doge} alt="" />} onClick={sup} type="Type" title="Tittel" />
	));
