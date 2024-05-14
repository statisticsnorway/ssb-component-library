import React from 'react';
import Table from './index';

export default {
	title: 'Table',
};

export const TableExample = () => (
	<Table caption="Tabellens tittel skal inn her, ofte ganske lang og over i hvert fall to linjer. Kanskje lengre. Ofte en del lengre og kan være over flere linjer" thead={['1']} tbody={['2']} tfoot={['3']} />
);

TableExample.story = {
	name: 'Table',
};
