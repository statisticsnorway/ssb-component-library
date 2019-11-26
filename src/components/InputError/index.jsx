import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ errorMessage, negative }) => (
	<div className={`ssb-input-error ${negative ? 'negative' : ''}`}>
		<span>{errorMessage}</span>
	</div>
);

InputError.defaultProps = {
	negative: false,
};

InputError.propTypes = {
	errorMessage: PropTypes.string.isRequired,
	negative: PropTypes.bool,
};

export default InputError;
