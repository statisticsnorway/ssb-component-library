import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ errorMessage, negative }) => (
	<span className={`ssb-input-error ${negative ? 'negative' : ''}`}>{errorMessage}</span>
);

InputError.defaultProps = {
	negative: false,
};

InputError.propTypes = {
	errorMessage: PropTypes.string.isRequired,
	negative: PropTypes.bool,
};

export default InputError;
