import React from 'react';
import PropTypes from 'prop-types';

const BlockContent = ({ children, sectionNumber }) => (
	<div className="ssb-block-content">
		{sectionNumber && <div className="section-number">
			{sectionNumber.length === 1 || sectionNumber < 10 && '0'}
			{sectionNumber}
		</div>}
		{children}
	</div>
);

BlockContent.propTypes = {
	children: PropTypes.node.isRequired,
	sectionNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BlockContent;
