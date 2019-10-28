import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, negative }) => <p className={`ssb-paragraph ${negative ? 'negative' : ''}`}>{ children }</p>;

Paragraph.propTypes = {
	children: PropTypes.node,
	negative: PropTypes.bool,
};

export default Paragraph;
