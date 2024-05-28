import React from 'react';
import Table from './index';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

export default {
	title: 'Table',
	type: Table,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Default = () => (
	<div style={{ padding: '4rem' }}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell type="th">Header</TableCell>
					<TableCell type="th" align="right">Header</TableCell>
					<TableCell type="th"></TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell type="td">Example</TableCell>
					<TableCell type="td" align="right">1000</TableCell>
					<TableCell type="td" align="center">Center</TableCell>
					</TableRow>
				<TableRow>
					<TableCell type="td">Example</TableCell>
					<TableCell type="td" align="right">500</TableCell>
					<TableCell type="td" align="center">Center</TableCell>
			</TableRow>
			</TableBody>
		</Table>
	</div>
);

export const Statistics = () => (
	<div style={{ width: '1400px', padding: '4rem' }}>
		<Table
			caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit."
			statistics
			>
			<TableHead>
				<TableRow>
					<TableCell type="th" rowSpan={2}>2020</TableCell>
					<TableCell type="th" colSpan={2}>Second level</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th">First level</TableCell>
					<TableCell type="th">First level</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell type="th" className="sum">Total (with numbers)</TableCell>
					<TableCell type="td" className="sum">1 000</TableCell>
					<TableCell type="td" className="sum">2 000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={1}>First level</TableCell>
					<TableCell type="td">50</TableCell>
					<TableCell type="td">100</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={2}>Second level</TableCell>
					<TableCell type="td">200</TableCell>
					<TableCell type="td">650</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={3}>Third level</TableCell>
					<TableCell type="td">500</TableCell>
					<TableCell type="td">200</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" className="sum">Total (with numbers)</TableCell>
					<TableCell type="td" className="sum">1 000</TableCell>
					<TableCell type="td" className="sum">2 000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={1}>First level</TableCell>
					<TableCell type="td">50</TableCell>
					<TableCell type="td">100</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={2}>Second level</TableCell>
					<TableCell type="td">200</TableCell>
					<TableCell type="td">650</TableCell>
				</TableRow>
				<TableRow>
					<TableCell type="th" level={3}>Third level</TableCell>
					<TableCell type="td">500</TableCell>
					<TableCell type="td">200</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell type="td" colSpan={3}>
						<sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	</div>
);
