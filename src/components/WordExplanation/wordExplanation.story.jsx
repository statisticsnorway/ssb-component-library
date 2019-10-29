import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import WordExplanation from './index';
import Text from '../Text';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('WordExplanation', module).addDecorator(centered)
	.add('As a wrapper', () => (
		<Text>You can explain a single <WordExplanation explanation={placeholderText}>word</WordExplanation>
			&nbsp;in a sentence.
		</Text>
	));
