import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ArrowRight } from 'react-feather';
import Link from './index';

const negativeStyle = {
	backgroundColor: '#274247',
	padding: '100px',
};

storiesOf('Link', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<p>Check it out a <Link href=" "> regular link</Link> within a sentence!</p>
			<Link href=" " icon={<ArrowRight size={16} />}>A regular link with icon</Link>
		</div>
	))
	.add('Profiled', () => (
		<div>
			<p><Link href=" " linkType="profiled">A profiled link</Link></p>
			<Link href=" " linkType="profiled" icon={<ArrowRight size={20} />}>A profiled link with icon</Link>
		</div>
	))
	.add('Header', () => (
		<div>
			<p><Link href=" " linkType="header">A header link</Link></p>
		</div>
	))
	.add('Negative', () => (
		<div style={negativeStyle}>
			<p><Link href=" " negative>A regular link - Negative</Link></p>
			<Link href=" " icon={<ArrowRight size={16} />} negative>A regular link with icon - Negative</Link>
			<p><Link href=" " linkType="profiled" negative>A profiled link - Negative</Link></p>
			<Link href=" " linkType="profiled" icon={<ArrowRight size={20} />} negative>A profiled link with icon - Negative</Link>
			<p><Link href=" " linkType="header" negative>A header link - Negative</Link></p>
		</div>
	))
	.add('Lange lenker', () => (
		<div style={{ width: '300px' }}>
			<p><Link href=" ">A regular link - A very long link that will cross several lines</Link></p>
			<Link href=" " icon={<ArrowRight size={16} />}>A regular link with icon - A very long link that will cross several lines</Link>
			<p><Link href=" " linkType="profiled">A profiled link - A very long link that will cross several lines</Link></p>
			<Link href=" " linkType="profiled" icon={<ArrowRight size={20} />}>A profiled link with icon - A very long link that will cross several lines</Link>
			<p><Link href=" " linkType="header">A header link - A very long link that will cross several lines</Link></p>
		</div>
	));
