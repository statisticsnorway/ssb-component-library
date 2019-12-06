import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown } from 'react-feather';
import StickyMenu from './index';
import Input from '../Input';
import Text from '../Text';

storiesOf('StickyMenu', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '1400px' }}>
			<StickyMenu>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
					<div>
						<Text small>Kommunefakta</Text>
						<div style={{ fontSize: '24px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
					</div>
					<div style={{ alignItems: 'center', display: 'flex' }}>
						<div style={{ alignItems: 'center', display: 'flex' }}>
							<label htmlFor="kommune" className="input-header">Bytt kommune:</label>
							<Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
						</div>
						<div style={{ marginLeft: '30px' }} className="choose-chart">Velg i kart</div>
						<ChevronDown size={18} className="chevron-down-icon" />
					</div>
				</div>
			</StickyMenu>
		</div>
	));
