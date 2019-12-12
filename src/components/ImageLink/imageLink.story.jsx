import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ImageLink from './index';
import doge from './doge.png';

const sup = (() => {
	console.log('Image link clicked');
});

storiesOf('Image Link', module).addDecorator(centered)
	.add('Default', () => (
		<ImageLink image={<img src={doge} alt="" />} onClick={sup} type="Type" title="Tittel" />
	));
