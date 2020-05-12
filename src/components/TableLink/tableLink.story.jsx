import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import TableLink from './index';

storiesOf('TableLink', module).addDecorator(centered)
	.add('default', () => (
		<div>
			<TableLink text="Tabell 1" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." title="Ekstra tekst" />
			<br />
			<TableLink text="Tabell 2" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
		</div>
	));
