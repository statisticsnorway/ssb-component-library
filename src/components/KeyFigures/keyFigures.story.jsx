import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Home } from 'react-feather';
import KeyFigures from './index';

const title = 'Antall husholdninger';

storiesOf('KeyFigures', module).addDecorator(centered)
	.add('Large', () => (
		<div>
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="large"
				icon={<Home />}
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
				icon={<Home />}
			/>
		</div>
	))
	.add('Small', () => (
		<div>
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="small"
				icon={<Home />}
			/>
		</div>
	));
