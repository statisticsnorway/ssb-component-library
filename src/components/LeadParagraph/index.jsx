import React from 'react';
import PropTypes from 'prop-types';

function LeadParagraph({ children, className, negative }) {
	return <p className={`ssb-lead-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{ children }</p>;
}

LeadParagraph.defaultProps = {
	className: '',
	negative: false,
};

LeadParagraph.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
};

export default LeadParagraph;
