import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import StickyMenu from './index';

storiesOf('StickyMenu', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<StickyMenu subtitle="Kommunefakta" title="Rana (Nordland)" />
		</div>
	));
