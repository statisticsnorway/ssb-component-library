import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import TableLink from './index';

storiesOf('TableLink', module).addDecorator(centered)
	.add('default', () => (
		<div>
			<TableLink title="Tabell 1" href="" hrefText="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." hrefTitle="Ekstra tekst" />
			<br />
			<TableLink title="Tabell 2" href="" hrefText="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
		</div>
	));
