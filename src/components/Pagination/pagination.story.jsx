import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Pagination from './index';

const items = [
	{ text: '1', path: '/1' },
	{ text: '2', path: '/2' },
	{ text: '3', path: '/3' },
	{ text: '4', path: '/4' },
	{ text: '5', path: '/5' },
	{ text: '6', path: '/6' },
	{ text: '7', path: '/7' },
	{ text: '8', path: '/8' },
	{ text: '9', path: '/9' },
	{ text: '10', path: '/10' },
	{	text: '11', path: '/11'	},
	{	text: '12', path: '/12'	},
	{	text: '13', path: '/13'	},
	{	text: '14', path: '/14'	},
	{	text: '15', path: '/15'	},
	{	text: '16', path: '/16'	},
	{	text: '17', path: '/17'	},
	{	text: '18', path: '/18'	},
	{	text: '19', path: '/19'	},
	{	text: '20', path: '/20'	},
];

storiesOf('Pagination', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Pagination items={items} selectedPage={items[4]} />
		</div>
	))
	.add('Html', () => (
		<div className="ssb-pagination">
			<div className="direction-button">
				<ChevronLeft className="chevron-icon" size={18} />Forrige
			</div>
			<div className="nav-button-square selected">1</div>
			<div className="nav-button-square">2</div>
			<div className="nav-button-square">3</div>
			<div className="nav-button-square">4</div>
			<div className="nav-button-square">5</div>
			<div className="nav-button-square">6</div>
			<div className="nav-button-square">7</div>
			<div className="nav-button-square">8</div>
			<div className="dotted-indicator">...</div>
			<div className="nav-button-square">20</div>
			<div className="direction-button">
				Neste<ChevronRight className="chevron-icon" size={18} />
			</div>
		</div>
	));
