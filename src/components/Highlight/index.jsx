import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({
	children, className, negative,
}) => (
	<mark className={`ssb-mark${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}> { children } </mark>
);

Highlight.defaultProps = {
	negative: false,
};

Highlight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	negative: PropTypes.bool,
};

export default Highlight;
