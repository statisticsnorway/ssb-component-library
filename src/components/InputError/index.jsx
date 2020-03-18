import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ className, errorMessage, negative }) => (
	<div className={`ssb-input-error${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>
		<span>{errorMessage}</span>
	</div>
);

InputError.defaultProps = {
	negative: false,
};

InputError.propTypes = {
	className: PropTypes.string,
	errorMessage: PropTypes.string.isRequired,
	negative: PropTypes.bool,
};

export default InputError;
