import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import StickyMenu from './index';

storiesOf('StickyMenu', module).addDecorator(centered)
	.add('Default', () => (
		<div className="col-12" style={{ width: '1200px' }}>
			<StickyMenu ChooseChartLabel="Velg i kart" inputHeader="Bytt kommune:" subtitle="Kommunefakta" title="Stordal (Møre og Romsdal)" />
		</div>
	));
