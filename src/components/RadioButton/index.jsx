import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbGreen1, ssbGreen4, ssbWhite, ssbDark5 } from '../../style/colors';
import { roboto } from '../../style/mixins';

const RadioButton = ({
	index, children, callback, selected, value, disabled,
}) => (
	<RadioButtonWrapper
		disabled={disabled}
		onClick={() => callback(value)}
		tabIndex={index + 1}
	>
		<LabelWrapper htmlFor={value}>
			{children}
			<InputWrapper
				checked={selected}
				id={value}
				onChange={() => callback(value)}
				type="radio"
				value={value}
			/>
			<RadioMark
				disabled={disabled}
				selected={selected}
			/>
		</LabelWrapper>
	</RadioButtonWrapper>
);

const InputWrapper = styled.input`
	cursor: pointer;
	opacity: 0;
	position: absolute;
`;

const LabelWrapper = styled.label`
	${roboto};
	cursor: pointer;	
`;

const RadioButtonWrapper = styled.div`
	color: ${props => (props.disabled ? '#a2baba' : '')};
	cursor: ${props => (props.disabled ? 'default' : 'pointer')};
	display: block;
	min-width: 200px;
	outline: none;
	padding: 10px 10px 10px 45px;
	pointer-events: ${props => (props.disabled ? 'none' : '')};
	position: relative;
	user-select: none;

	&:hover, &:focus {
		background: ${ssbGreen1};
	}	
`;

const RadioMark = styled.span`
	background-color: ${ssbWhite};
	border: 1px solid ${props => (props.disabled ? '#a2baba' : ssbDark5)};
	border-radius: 50%;
	height: 20px;
	left: 10px;
	position: absolute;
	top: 10px;
	width: 20px;

	&:after {
		border-radius: 50%;
		background: ${ssbDark5};
		content: '';
		display: ${props => (props.selected ? 'block' : 'none')};
		height: 12px;
		left: 3px;
		position: absolute;
		top: 3px;
		width: 12px;
	}
	
	&:hover, &:focus ${RadioButtonWrapper}{
		border: 2px solid ${ssbGreen4};

		&:after { left: 2px; top: 2px; }
	}
`;

RadioButton.defaultProps = {
	callback: () => {},
	disabled: false,
	index: 1,
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default RadioButton;

/*
options:
	callback: optional callback on selection
	children: required for displaying a label
	index: optional for tab order
	selected: optional for setting selection
	value: required for having value on selection
 */
