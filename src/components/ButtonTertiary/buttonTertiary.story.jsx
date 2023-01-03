import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonTertiary from './index';

storiesOf('ButtonTertiary', module)
	.add('Tertiary', () => (
		<div style={{ width: '900px', display: 'flex' }}>
			<ButtonTertiary className="mr-4" header="Avsluttet statistikk">
				<div>
					<p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>
					<p>Ipsum</p>
				</div>
			</ButtonTertiary>
		</div>
	));
