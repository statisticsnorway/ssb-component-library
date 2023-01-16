import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonTertiary from './index';
import Card from '../Card';

const testOnClick = () => {
	console.log('Im an onClick func');
};

storiesOf('ButtonTertiary', module)
	.add('Tertiary', () => (
		<>
			<div style={{ width: '800px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
				<ButtonTertiary className="mr-4" header="Knapp med Icon og Content">
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
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp" accordion={false} onClick={() => testOnClick()} />

				<ButtonTertiary className="mr-4" header="Disabled Knapp" disabled>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>
			</div>

			<div style={{ width: '800px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', background: '#224742' }}>

				<ButtonTertiary className="mr-4" header="Knapp negative" negative accordion={false} onClick={() => testOnClick()}>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" negative>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" accordion={false} negative disabled onClick={() => testOnClick()}>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>

				<ButtonTertiary className="mr-4" header="Knapp negative med Icon" negative disabled>
					<p>Explain something about something with something clever.</p>
				</ButtonTertiary>
			</div>
		</>
	));
