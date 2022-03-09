import React from 'react';
import { storiesOf } from '@storybook/react';
import Glossary from './index';
import Text from '../Text';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('Glossary', module)
	.add('As a wrapper', () => (
		<Text>You can explain a single <Glossary explanation={placeholderText} closeText="Close">word</Glossary>
			&nbsp;in a sentence.
		</Text>
	));
