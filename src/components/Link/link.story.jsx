import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ArrowRight } from 'react-feather';
import Link from './index';
import { ssbDark6 } from '../../style/colors';

const negativeStyle = {
	backgroundColor: ssbDark6,
};

storiesOf('Link', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<p><Link href=" ">A regular link</Link></p>
			<Link href=" " icon={<ArrowRight size={20} />}>A regular link with icon</Link>
		</div>
	))
	.add('Profiled', () => (
		<div>
			<p><Link href=" " linkType="profiled">A profiled link</Link></p>
			<Link href=" " linkType="profiled" icon={<ArrowRight />}>A profiled link with icon</Link>
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
			<Link href=" " icon={<ArrowRight size={20} />} negative>A regular link with icon - Negative</Link>
			<p><Link href=" " linkType="profiled" negative>A profiled link - Negative</Link></p>
			<Link href=" " linkType="profiled" icon={<ArrowRight />} negative>A profiled link with icon - Negative</Link>
			<p><Link href=" " linkType="header" negative>A header link - Negative</Link></p>
		</div>
	));
