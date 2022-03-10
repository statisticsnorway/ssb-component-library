import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ children, className, negative }) {
	return <p className={`ssb-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{ children }</p>;
}

Paragraph.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
};

export default Paragraph;
