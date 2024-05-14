import React from 'react';
import Table from './index';

export default {
	title: 'Table',
};

export const TableExample = () => (
	<Table caption="This is a table" thead={['1']} tbody={['2']} tfoot={['3']} />
);

TableExample.story = {
	name: 'Table',
};
