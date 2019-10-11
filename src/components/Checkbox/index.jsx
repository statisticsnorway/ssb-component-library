import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5, ssbGreen1, ssbGreen4, ssbWhite } from '../../style/colors';
import { roboto } from '../../style/mixins';

const Checkbox = ({
	index, children, callback, selected, value, disabled,
}) => (
	<CheckboxWrapper
		disabled={disabled}
		tabIndex={index + 1}
	>
		<label htmlFor={value}>
			{children}
			<input
				id={value}
				checked={selected}
				onChange={() => callback(value)}
				type="checkbox"
				value={value}
			/>
			<CheckMark
				disabled={disabled}
				selected={selected}
			/>
		</label>
	</CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
	${roboto};
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
  
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  label {
    cursor: pointer;
  }
  
`;

const CheckMark = styled.span`
    background: ${props => (props.selected ? ssbDark5 : ssbWhite)};
    border: 1px solid;
    border-color: ${props => (props.disabled ? '#a2baba' : ssbDark5)};
    border-radius: 2px;
    height: 20px;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 20px;

    &:after {
      border: solid ${ssbWhite};
      border-width: 0 3px 3px 0;
      content: '';
      display: ${props => (props.selected ? 'block' : 'none')};
      height: 12px;
      left: 6px;
      position: absolute;
      top: 2px;
      transform: rotate(45deg);
      width: 6px;
    }

    &:hover, &:focus ${CheckboxWrapper} {
        border: 2px solid ${ssbGreen4};

        &:after {
            left: 5px;
            top: 1px;
        }
    }

`;

Checkbox.defaultProps = {
	callback: () => {},
	index: 1,
};

Checkbox.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node,
	disabled: PropTypes.bool,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Checkbox;
