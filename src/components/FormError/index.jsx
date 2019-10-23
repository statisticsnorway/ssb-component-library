import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ errorMessage, negative }) => (
	<span className={`ssb-form-error ${negative ? 'negative' : ''}`}>{errorMessage}</span>
);

FormError.defaultProps = {
	negative: false,
};

FormError.propTypes = {
	errorMessage: PropTypes.node.isRequired,
	negative: PropTypes.bool,
};

export default FormError;
