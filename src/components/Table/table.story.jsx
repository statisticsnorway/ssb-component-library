import React from 'react';
import Table from './index';

export default {
	title: 'Table',
};

export const Default = () => (
	<div style={{ width: '1400px' }}>
		<Table
			caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit."
			thead={(
				<tr>
					{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
					<th>&nbsp;</th>
					<th>Header</th>
					<th>Header</th>
				</tr>
			)}
			tbody={(
				<>
					<tr>
						<th>Title</th>
						<td>1 000</td>
						<td>2 000</td>
					</tr>
					<tr>
						<th>Title</th>
						<td>50</td>
						<td>100</td>
					</tr>
				</>
			)}
			tfoot={(
				<tr>
					<td colSpan="100%">
						<sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
					</td>
				</tr>
			)}
		/>
	</div>
);

export const TableExample = () => (
	<div style={{ width: '1400px' }}>
		<Table
			caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit."
			thead={(
				<>
					<tr>
						{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
						<th rowSpan={2}>&nbsp;</th>
						<th colSpan={2}>Header 1</th>
					</tr>
					<tr>
						<th>First level</th>
						<th>First level</th>
					</tr>
				</>
			)}
			tbody={(
				<>
					<tr>
						<th>Title</th>
						<td>1 000</td>
						<td>2 000</td>
					</tr>
					<tr>
						<th>Title</th>
						<td>50</td>
						<td>100</td>
					</tr>
				</>
			)}
			tfoot={(
				<tr>
					<td colSpan="100%">
						<sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
					</td>
				</tr>
			)}
		/>
	</div>
);

export const WithIndentation = () => (
	<div style={{ width: '1400px' }}>
		<Table
			caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit."
			thead={(
				<>
					<tr>
						<th rowSpan={2}>2020</th>
						<th colSpan={2}>Second level</th>
					</tr>
					<tr>
						<th>First level</th>
						<th>First level</th>
					</tr>
				</>
			)}
			tbody={(
				<>
					<tr>
						<th className="sum">Total (with numbers)</th>
						<td className="sum">1 000</td>
						<td className="sum">2 000</td>
					</tr>
					<tr>
						<th className="level1">First level</th>
						<td>50</td>
						<td>100</td>
					</tr>
					<tr>
						<th className="level2">Second level</th>
						<td>200</td>
						<td>650</td>
					</tr>
					<tr>
						<th className="level3">Third level</th>
						<td>500</td>
						<td>200</td>
					</tr>
					<tr>
						<th className="sum">Total (with numbers)</th>
						<td className="sum">1 000</td>
						<td className="sum">2 000</td>
					</tr>
					<tr>
						<th className="level1">First level</th>
						<td>50</td>
						<td>100</td>
					</tr>
					<tr>
						<th className="level2">Second level</th>
						<td>200</td>
						<td>650</td>
					</tr>
					<tr>
						<th className="level3">Third level</th>
						<td>500</td>
						<td>200</td>
					</tr>
				</>
			)}
			tfoot={(
				<tr>
					<td colSpan="100%">
						<sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
					</td>
				</tr>
			)}
		/>
	</div>
);

export const NoFooter = () => (
	<div style={{ width: '1400px' }}>
		<Table
			caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit."
			thead={(
				<tr>
					{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
					<th>&nbsp;</th>
					<th>Header</th>
					<th>Header</th>
				</tr>
			)}
			tbody={(
				<>
					<tr>
						<th>Title</th>
						<td>1 000</td>
						<td>2 000</td>
					</tr>
					<tr>
						<th>Title</th>
						<td>50</td>
						<td>100</td>
					</tr>
				</>
			)}
		/>
	</div>
);
