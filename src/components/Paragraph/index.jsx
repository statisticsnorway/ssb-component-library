import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className, negative }) => <p className={`ssb-paragraph ${negative ? 'negative' : ''}${className ? ' ' + className : ''}`}>{ children }</p>;

Paragraph.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
};

export default Paragraph;
