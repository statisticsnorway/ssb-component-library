import React from 'react';
import PropTypes from 'prop-types';

// TODO:
// * React hooks e.g. useRef
// * WAI-ARIA
// * Toggle-able statistics table (including sum and level)

const Table = ({ tableClass, caption, thead, tbody, tfoot }) => (
	<div className="ssb-table">
		<table className={`${tableClass ?? ''}`}>
			{caption && (
				<caption>
					<div className="caption-text-wrapper">
						{caption}
					</div>
					<div className="scroll-icon-wrapper" />
				</caption>
			)}
			{thead && <thead>{thead}</thead>}
			{tbody && <tbody>{tbody}</tbody>}
			{tfoot && <tfoot>{tfoot}</tfoot>}
		</table>
	</div>
);

Table.defaultProps = {

};

Table.propTypes = {
	tableClass: PropTypes.string,
	caption: PropTypes.string,
	thead: PropTypes.element,
	tbody: PropTypes.element,
	tfoot: PropTypes.element,
};

export default Table;
