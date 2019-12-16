import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown, Map, Search } from 'react-feather';
import StickyMenu from './index';
import Input from '../Input';
import Text from '../Text';
import Divider from '../Divider';

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
							<label htmlFor="kommune" className="input-header">Bytt kommune:</label>{/* eslint-disable-line */}
							<Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
						</div>
						<div style={{ marginLeft: '30px' }} className="choose-chart">Velg i kart</div>
						<ChevronDown size={18} className="chevron-down-icon" />
					</div>
				</div>
			</StickyMenu>
		</div>
	))
	.add('Mobile', () => (
		<div style={{ width: '360px' }}>
			<StickyMenu>
				<div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: 'auto', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '16px' }}>
					<div style={{ fontSize: '18px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
					<div style={{ display: 'flex' }}>
						<Search size={18} className="chevron-down-icon" style={{ marginRight: '4px', backgroundColor: '#00824d', color: '#ffffff', padding: '4px' }} />
						<Map size={18} className="chevron-down-icon" style={{ padding: '4px' }} />
					</div>
				</div>
				<Divider light />
				<div style={{ width: 'auto', paddingTop: '12px', paddingLeft: '20px', paddingRight: '20px' }}>
					<div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '8px' }}>Bytt kommune:</div>
					<Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
				</div>
			</StickyMenu>
		</div>
	));
