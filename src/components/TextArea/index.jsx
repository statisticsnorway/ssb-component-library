import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import InputError from '../InputError';

const TextArea = ({
	ariaLabel, className, disabled, error, errorMessage, handleChange, id, label, negative, placeholder, value,
}) => {
	const [inputValue, setValue] = useState(value);
	const inputId = id || uuid();
	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<div className={`ssb-text-area${negative ? ' negative' : ''}${error ? ' error' : ''}${className ? ` ${className}` : ''}`}>
			{label && <label htmlFor={inputId}>{label}</label>}
			<div className="text-area-wrapper">
				<textarea
					id={inputId}
					disabled={disabled}
					value={inputValue}
					onChange={e => handleInputChange(e)}
					placeholder={placeholder}
					aria-label={ariaLabel}
				/>
			</div>
			{error && (errorMessage && (
				<InputError errorMessage={errorMessage} negative={negative} />
			))}
		</div>
	);
};

TextArea.defaultProps = {
	className: '',
	disabled: false,
	error: false,
	handleChange: () => {},
	negative: false,
};

TextArea.propTypes = {
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	handleChange: PropTypes.func,
	id: PropTypes.string,
	label: PropTypes.string,
	negative: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.string,
};

export default TextArea;
