import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { AlertTriangle, Search } from 'react-feather';
import FormError from '../FormError';

const Input = ({
	disabled, error, errorMessage, handleChange, id, label, negative, searchField, submitCallback, type, value,
}) => {
	const [inputValue, setValue] = useState(value);
	const inputId = id || uuid();
	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<div className={`ssb-input ${negative ? 'negative' : ''} ${error ? 'error' : ''}`}>
			<label htmlFor={inputId}>{label}</label>
			<div className="input-wrapper">
				<input
					id={inputId}
					disabled={disabled}
					type={type}
					value={inputValue}
					onChange={e => handleInputChange(e)}
				/>
				{searchField && (
					<div className="icon-wrapper" onClick={() => submitCallback(inputValue)}>
						<Search size={18} />
					</div>
				)}
				{error && (
					<div className="icon-wrapper">
						<AlertTriangle size={18} />
					</div>
				)}
			</div>
			{error && (errorMessage && (
				<FormError negative={negative} errorMessage={errorMessage} />
			))}
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
	error: false,
	handleChange: () => {},
	label: 'Input field',
	negative: false,
	searchField: false,
	submitCallback: () => {},
	type: 'text',
};

Input.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	handleChange: PropTypes.func,
	id: PropTypes.string,
	label: PropTypes.string,
	negative: PropTypes.bool,
	searchField: PropTypes.bool,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
