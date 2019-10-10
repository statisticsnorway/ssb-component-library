import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbGreen1, ssbGreen4, ssbWhite, ssbDark5 } from '../../style/colors';

const RadioButton = ({
	index, children, callback, selected, value, disabled,
}) => (
	<RadioButtonWrapper tabIndex={index + 1} className={`radio-button-wrapper${disabled ? ' disabled' : ''}`} onClick={() => callback(value)}>
		<LabelWrapper htmlFor={value}>
			{children}
			<input
				id={value}
				value={value}
				type="radio"
				checked={selected}
				onChange={() => callback(value)}
			/>
			<span className="radio-mark" />
		</LabelWrapper>
	</RadioButtonWrapper>
);

const LabelWrapper = styled.label`
	.radio-mark {
		background-color: ${ssbWhite};
		border: 1px solid ${ssbDark5};
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
			display: none;
			height: 12px;
			left: 3px;
			position: absolute;
			top: 3px;
			width: 12px;
		}
	}

	input {
		cursor: pointer;
		opacity: 0;
		position: absolute;

		&:checked ~ .radio-mark {
			background: ${ssbWhite};
		}

		&:checked ~ .radio-mark:after {
			display: block;
		}
	}

	label {
		cursor: pointer;
	}

	
`;

const RadioButtonWrapper = styled.div`
	cursor: pointer;
	display: block;
	min-width: 200px;
	outline: none;
	padding: 10px 10px 10px 45px;
	position: relative;
	user-select: none;

	&:hover, &:focus {
		background: ${ssbGreen1};

		.radio-mark {
			border: 2px solid ${ssbGreen4};

			&:after {
			left: 2px;
			top: 2px;
			}
		}
	}
	
	&.disabled {
		color: #a2baba;
		cursor: default;
		pointer-events: none;

		.radio-mark {
			border: 1px solid #a2baba;
		}
	}
`;

RadioButton.defaultProps = {
	callback: () => {},
	index: 1,
	disabled: false,
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	disabled: PropTypes.bool,
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
