import React from 'react';
import { render } from '../../utils/test'
import Table, { TableHead, TableBody, TableFooter, TableRow, TableCell } from './index';

describe('Render Table component', () => {
	test('Table without caption and footer', () => {
		const { asFragment } = render (
			<Table>
				<TableHead>
					<TableRow>
						<TableCell type="th">Header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Value</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		)
		expect(asFragment()).toMatchSnapshot();
	})

	test('Table with caption and footer', () => {
		const { asFragment } = render(
      <Table caption="Table caption">
				<TableHead>
					<TableRow>
						<TableCell type="th" rowSpan={2} align="right">Header with footnote <sup>1</sup></TableCell>
						<TableCell type="th" scope="colgroup">Alignment</TableCell>
					</TableRow>
					<TableRow>
						<TableCell type="th" scope="col" align="right">Header right</TableCell>
						<TableCell type="th" scope="col"align="center">Header center</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell type="th" scope="row">Value</TableCell>
						<TableCell align="right">500</TableCell>
						<TableCell align="center">Center</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>
							<sup>1</sup> Footnote description
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
    );
		expect(asFragment()).toMatchSnapshot();
	});
});
