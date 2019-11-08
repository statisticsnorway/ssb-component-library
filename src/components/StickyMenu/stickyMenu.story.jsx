import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown } from 'react-feather';
import StickyMenu from './index';
import Input from '../Input';

storiesOf('StickyMenu', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '1400px' }}>
			<StickyMenu >
				<div className="container">
					<div className="row align-items-center">
						<div className="column col-5">
						<div>
							<div className="subtitle">Kommunefakta</div>
							<div className="title">Stordal (Møre og Romsdal)</div>
						</div>
						</div>
						<div className="column col-5">
							<div className="col-flex flex-row align-items-center">
								<div className="input-header">Bytt kommune</div>
								<Input ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
							</div>
						</div>
						<div className="column col-2">
							<div className="choose-chart">Velg i kart</div><ChevronDown className="chevron-down-icon" size={18} />
						</div>
					</div>
				</div>
			</StickyMenu>
		</div>
	));
