import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { AlertTriangle, Search } from 'react-feather';
import { negativeRed, ssbDark5, ssbDark6, ssbGreen2, ssbGreen4, ssbRed4, ssbWhite } from '../../style/colors';
import { roboto } from '../../style/mixins';

const Input = ({
	disabled, error, errorMessage, handleChange, label, negative, searchField, submitCallback, type, value,
}) => {
	const [inputValue, setValue] = useState(value);
	const id = uuid();
	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<Wrapper>
			<InputLabel negative={negative} htmlFor={id}>{label}</InputLabel>
			<InputWrapper>
				<InputField
					id={id}
					error={error}
					searchField={searchField}
					disabled={disabled}
					type={type}
					negative={negative}
					value={inputValue}
					onChange={e => handleInputChange(e)}
				/>
				{searchField && (
					<IconWrapper onClick={() => submitCallback(inputValue)}>
						<Search style={{color: negative ? ssbGreen2 : ssbGreen4}} className="search-icon" size={18} />
					</IconWrapper>
				)}
				{error && (
					<IconWrapper>
						<AlertTriangle style={{color: negative ? negativeRed : ssbRed4}} className="alert-icon" size={18} />
					</IconWrapper>
				)}
			</InputWrapper>
			{error && (errorMessage && (
				<ErrorMessage negative={negative}>{ errorMessage }</ErrorMessage>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	${roboto};
	cursor: text;
  display: flex;
  flex-direction: column;
  margin: 10px;
  position: relative;
`;

const InputWrapper = styled.div`
	display: flex;
`;

const InputField = styled.input`
	background: ${props => props.negative ? 'transparent' : ssbWhite};
	border: ${props => props.error ? `2px solid ${props.negative ? negativeRed : ssbRed4}`
		: (props.negative ? `1px solid ${ssbWhite}` : `1px solid ${ssbDark5}`)};
	color: ${props => props.negative ? ssbWhite : 'inherit'};
	font-size: 16px;
	height: 36px;
	padding: ${props => props.searchField ? '4px 36px 4px 10px' : '4px 10px'};
	text-overflow: ellipsis;
	width: 100%;
	
	&:disabled {
	border: 1px solid ${props => props.negative ? ssbWhite : ssbDark5};
	cursor: not-allowed;
	}
	
	&:focus {
		${props => !props.error && `border: 2px solid ${props.negative ? ssbGreen2 : ssbGreen4};`};
		outline: none;
	}
	
	${Wrapper}:hover & {
		${props => !props.error && `border: 2px solid ${props.negative ? ssbGreen2 : ssbGreen4};`};
		&:disabled {
			border: 1px solid ${props => props.negative ? ssbWhite : ssbDark5};
		}
	}
`;

const InputLabel = styled.label`
	color: ${props => props.negative ? ssbWhite : ssbDark6};
	cursor: text;
	font-size: 14px;
	margin-bottom: 5px;
	user-select: none;
`;

const IconWrapper = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 36px;
	justify-content: center;
	margin-left: -36px;
	width: 36px;
`;

const ErrorMessage = styled.span`
	color: ${props => props.negative ? negativeRed : ssbRed4};
	font-size: 14px;
	margin-top: 10px;
`;

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
	label: PropTypes.string,
	negative: PropTypes.bool,
	searchField: PropTypes.bool,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
