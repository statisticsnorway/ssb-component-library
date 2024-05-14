import React from 'react';
import PropTypes from 'prop-types';

// TODO:
// * React hooks e.g. useRef
// * WAI-ARIA

const Table = ({ tableClass, caption, thead, tbody, tfoot }) => (
	<div className="ssb-table">
		<table className={`${tableClass ?? ''}`}>
			{caption ? (
				<caption>
					<div className="caption-text-wrapper">
						{caption}
					</div>
				</caption>
			) : null}
			{thead?.length ? (
				<thead>
					{thead.map(() => (
						<>
							<tr>
								<th rowSpan={2} />
								<th colSpan={2}>Header 1</th>
							</tr>
							<tr>
								<th>Header 2</th>
								<th>Header 3
								</th>
							</tr>
						</>
					))}
				</thead>
			) : null}
			{tbody?.length ? (
				<tbody>
					{tbody.map(() => (
						<>
							<tr>
								<td>Body 1</td>
								<td>Body 2</td>
								<td>Body 3</td>
							</tr>
							<tr>
								<td>Body 4</td>
								<td>Body 5</td>
								<td>Body 6</td>
							</tr>
						</>
					))}
				</tbody>
			) : null}
			{tfoot?.length ? (
				<tfoot>
					{tfoot.map(() => (
						<tr>
							<td colSpan="100%"><sup>1</sup>&nbsp;Footer 1</td>
						</tr>
					))}
				</tfoot>
			) : null}
		</table>
	</div>
);

Table.defaultProps = {

};

Table.propTypes = {
	tableClass: PropTypes.string,
	caption: PropTypes.string,
	thead: PropTypes.array,
	tbody: PropTypes.array,
	tfoot: PropTypes.array,
};

export default Table;
