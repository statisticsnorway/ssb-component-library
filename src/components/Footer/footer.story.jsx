import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronRight } from 'react-feather';
import Footer from './index';
import Link from '../Link';
import Title from '../Title';

storiesOf('Footer', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '1200px' }}>
			<Footer>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, auto)' }}>
					<div>
						<Title size={5} negative>Category</Title>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
						</div>
					</div>
					<div>
						<Title size={5} negative>Category</Title>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
						</div>
					</div>
					<div>
						<Title size={5} negative>Category</Title>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
						</div>
					</div>
					<div>
						<Title size={5} negative>Category</Title>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
						</div>
					</div>
					<div>
						<Title size={5} negative>Category</Title>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
							<Link icon={<ChevronRight />} href=" " negative>A link</Link>
						</div>
					</div>
				</div>
			</Footer>
		</div>
	));
