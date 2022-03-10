import React from 'react';
import PropTypes from 'prop-types';

function BlockContent({ children, className, sectionNumber }) {
	return (
		<div className={`ssb-block-content${className ? ` ${className}` : ''}`}>
			{sectionNumber && (
				<div className="section-number">
					{(sectionNumber.length === 1 || sectionNumber < 10) && '0'}
					{sectionNumber}
				</div>
			)}
			{children}
		</div>
	);
}

BlockContent.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	sectionNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BlockContent;
