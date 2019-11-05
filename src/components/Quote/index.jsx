import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({
	children, negative,
}) => (
	<span className={`ssb-quote${negative ? ' negative' : ''}`}>{ children }</span>
);

Quote.defaultProps = {
	negative: false,
};

Quote.propTypes = {
	children: PropTypes.node.isRequired,
	negative: PropTypes.bool,
};

export default Quote;
