import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import KeyFigures from './index';

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
				icon={<i className="feather-home" />}
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
				icon={<i className="feather-home" />}
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
				icon={<i className="feather-home" />}
			/>
		</div>
	));
