import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonTertiary from './index';
import Card from '../Card';

storiesOf('ButtonTertiary', module)
	.add('Tertiary', () => (
		<div style={{ width: '900px', height: '200px', display: 'flex', flexDirection: 'inline' }}>
			<ButtonTertiary className="mr-4" header="Avsluttet statistikk">
				<Card title="Tittel" href=" ">
					<p>Explain something about something with something clever.</p>
				</Card>
				<Card title="Tittel" href=" ">
					<p>Explain something about something with something clever.</p>
				</Card>
				<Card title="Tittel" href=" ">
					<p>Explain something about something with something clever.</p>
				</Card>
			</ButtonTertiary>
		</div>
	));
