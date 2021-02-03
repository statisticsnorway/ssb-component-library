import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Search } from 'react-feather';
import InputError from '../InputError';

const Input = ({
	ariaLabel, ariaLabelSearchButton, className, disabled, error, errorMessage, handleChange, id, label, negative, placeholder, searchField, submitCallback, type, value,
}) => {
	const [inputValue, setValue] = useState(value);
	const inputId = id || uuid();
	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			submitCallback(inputValue);
		}
	};

	return (
		<div className={`ssb-input${negative ? ' negative' : ''}${error ? ' error' : ''}${className ? ` ${className}` : ''}`}>
			{label && <label htmlFor={inputId}>{label}</label>}
			<div className="input-wrapper">
				<input
					id={inputId}
					disabled={disabled}
					type={type}
					value={inputValue}
					onChange={e => handleInputChange(e)}
					placeholder={placeholder}
					aria-label={ariaLabel}
					className={searchField || error ? ' with-icon' : ''}
					onKeyDown={searchField ? e => handleKeyDown(e) : undefined}
				/>
				{searchField && (
					<button aria-label={ariaLabelSearchButton} className="icon-wrapper search-icon" onClick={() => submitCallback(inputValue)}>
						<Search size={18} />
					</button>
				)}
			</div>
			{error && (errorMessage && (
				<InputError negative={negative} errorMessage={errorMessage} />
			))}
		</div>
	);
};

Input.defaultProps = {
	className: '',
	disabled: false,
	error: false,
	handleChange: () => {},
	negative: false,
	searchField: false,
	submitCallback: () => {},
	type: 'text',
	ariaLabelSearchButton: 'search',
	value: '',
};

Input.propTypes = {
	ariaLabel: PropTypes.string,
	ariaLabelSearchButton: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	handleChange: PropTypes.func,
	id: PropTypes.string,
	label: PropTypes.string,
	negative: PropTypes.bool,
	placeholder: PropTypes.string,
	searchField: PropTypes.bool,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
