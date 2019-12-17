import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Glossary from './index';
import Text from '../Text';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('Glossary', module).addDecorator(centered)
	.add('As a wrapper', () => (
		<Text>You can explain a single bla bla bla bla bla <Glossary explanation={placeholderText}>word</Glossary>
			&nbsp;in a sentence.
		</Text>
	));
