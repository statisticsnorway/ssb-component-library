import React from 'react';
import PropTypes from 'prop-types';

const LeadParagraph = ({ children, negative }) => <p className={`ssb-lead-paragraph ${negative ? 'negative' : ''}`}>{ children }</p>;

LeadParagraph.propTypes = {
	children: PropTypes.node,
	negative: PropTypes.bool,
};

export default LeadParagraph;
