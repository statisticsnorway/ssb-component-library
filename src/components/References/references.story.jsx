import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import References from './index';

const referenceList = [
	{
		href: ' ',
		label: 'Link 1',
	}, {
		href: ' ',
		label: 'Link 2',
	}, {
		href: ' ',
		label: 'Link 3',
		plainText: 'A paragraph',
	},
];

const referenceList2 = [
	{
		href: ' ',
		label: 'Link 1',
	}, {
		href: ' ',
		label: 'Link 2',
	}, {
		href: ' ',
		label: 'Link 3',
	},
];

storiesOf('References', module).addDecorator(centered)
	.add('Regular', () => (
		<References title="Source" referenceList={referenceList2} />
	))
	.add('With paragraph', () => (
		<References title="Source" referenceList={referenceList} />
	));
