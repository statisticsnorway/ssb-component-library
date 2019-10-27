import React from 'react';
import PropTypes from 'prop-types';

const LeadParagraph = ({ children, negative }) => <p className={negative ? 'negative' : ''}>{ children }</p>;

LeadParagraph.propTypes = {
	children: PropTypes.node,
	negative: PropTypes.bool,
};

export default LeadParagraph;
