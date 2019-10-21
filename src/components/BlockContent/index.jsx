import React from 'react';
import PropTypes from 'prop-types';

const BlockContent = ({children, pageNumber}) => (
	<div className="ssb-block-content">
		{pageNumber && <div className="page-number">{pageNumber}</div>}
		{children}
	</div>
);

BlockContent.propTypes = {
	children: PropTypes.node.isRequired,
	pageNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BlockContent;
