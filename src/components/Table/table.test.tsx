import React from 'react';
import { render } from '../../utils/test'
import Table, { TableHead, TableBody, TableFooter, TableRow, TableCell } from './index';

describe('Render Table component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(
      <Table caption="Table caption">
			<TableHead>
				<TableRow>
					<TableCell type="th">Header <sup>1</sup></TableCell>
					<TableCell type="th" align="right">Header</TableCell>
					<TableCell type="th" />
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>Example</TableCell>
					<TableCell align="right">1000</TableCell>
					<TableCell align="center">Center</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Example</TableCell>
					<TableCell align="right">500</TableCell>
					<TableCell align="center">Center</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell>
						<sup>1</sup> Footnote description
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
    );
		expect(asFragment()).toMatchSnapshot();
	});
});
