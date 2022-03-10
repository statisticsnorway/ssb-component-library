import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ className, errorMessage, negative, id }) => (
	<div className={`ssb-input-error${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`} id={id}>
		<span aria-live="assertive">{errorMessage}</span>
	</div>
);

InputError.defaultProps = {
	negative: false,
};

InputError.propTypes = {
	className: PropTypes.string,
	errorMessage: PropTypes.string.isRequired,
	negative: PropTypes.bool,
	id: PropTypes.string,
};

export default InputError;
