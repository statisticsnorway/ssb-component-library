import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Search } from 'react-feather';
import InputError from '../InputError';

const Input = ({
	ariaLabel, ariaLabelSearchButton, className, disabled, error, errorMessage, handleChange, id, label, negative, placeholder, searchField, submitCallback, type, value, onFocus, onBlur, size,
}) => {
	const inputId = id || uuid();

	const handleInputChange = e => {
		handleChange(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			submitCallback(value);
		}
	};

	return (
		<div className={`ssb-input${negative ? ' negative' : ''}${error ? ' error' : ''}${size === 'lg' ? ' input-lg' : ''}${className ? ` ${className}` : ''}`}>
			{label && <label htmlFor={inputId}>{label}</label>}
			<div className="input-wrapper">
				<input
					id={inputId}
					disabled={disabled}
					type={type}
					value={value}
					onChange={e => handleInputChange(e)}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder={placeholder}
					aria-label={ariaLabel}
					className={searchField || error ? ' with-icon' : ''}
					onKeyDown={searchField ? e => handleKeyDown(e) : undefined}
				/>
				{searchField && (
					<button aria-label={ariaLabelSearchButton} className="icon-wrapper search-icon" onClick={() => submitCallback(value)}>
						<Search size={size === 'lg' ? '72' : '18'} />
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
	onFocus: () => {},
	onBlur: () => {},
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
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	id: PropTypes.string,
	label: PropTypes.string,
	negative: PropTypes.bool,
	placeholder: PropTypes.string,
	searchField: PropTypes.bool,
	size: PropTypes.string,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
