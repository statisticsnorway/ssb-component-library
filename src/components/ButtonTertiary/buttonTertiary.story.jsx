import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonTertiary from './index';
import Card from '../Card';

storiesOf('ButtonTertiary', module)
	.add('Tertiary', () => (
		<>
			<div style={{ width: '800px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', background: '#F0F8F9' }}>
				{/* <ButtonTertiary className="mr-4" header="Knapp med Content">
					<div style={{ display: 'flex', flexDirection: 'inline', gridColumnGap: '11px' }}>
						<Card title="Tittel" href=" ">
							<p>Explain something about something with something clever.</p>
						</Card>
						<Card title="Tittel" href=" ">
							<p>Explain something about something with something clever.</p>
						</Card>
						<Card title="Tittel" href=" ">
							<p>Explain something about something with something clever.</p>
						</Card>
					</div>
				</ButtonTertiary> */}

				<ButtonTertiary className="mr-4" header="Knapp" icon={false}>
					<p>Explain something about something with something clever.</p>
					<p>Explain something about something with something clever.</p>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp med Icon" icon>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Disabled Knapp" icon disabled>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>
			</div>

			<div style={{ width: '800px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', background: '#224742' }}>

				<ButtonTertiary className="mr-4" header="Knapp negative" negative icon={false}>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" icon negative>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" icon={false} negative disabled>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" icon negative disabled>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>
			</div>
		</>
	));
