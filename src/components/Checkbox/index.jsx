import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5, ssbGreen1, ssbGreen4, ssbWhite } from '../../style/colors';

const Checkbox = ({
	index, children, callback, selected, value, disabled,
}) => (
	<CheckboxWrapper>
		<div tabIndex={index + 1} className={`checkbox-button-wrapper${disabled ? ' disabled' : ''}`}>
			<label htmlFor={value}>
				{children}
				<input
					id={value}
					value={value}
					type="checkbox"
					checked={selected}
					onChange={() => callback(value)}
				/>
				<span className="check-mark" />
			</label>
		</div>
	</CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
	cursor: pointer;
  display: block;
  min-width: 200px;
  outline: none;
  padding: 10px 10px 10px 45px;
  position: relative;
  user-select: none;  
  
  .check-mark {
    background-color: ${ssbWhite};
    border: 1px solid ${ssbDark5};
    border-radius: 2px;
    height: 20px;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 20px;

    &:after {
      content: '';
      display: none;
      position: absolute;

      left: 6px;
      top: 2px;
      width: 6px;
      height: 12px;
      border: solid ${ssbWhite};
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  
  &.disabled {
    cursor: default;
    pointer-events: none;
    color: #a2baba;

    .check-mark {
      border: 1px solid #a2baba;
    }
  }
  
  &:hover, &:focus {
    background: ${ssbGreen1};

    .check-mark {
      border: 2px solid ${ssbGreen4};

      &:after {
        left: 5px;
        top: 1px;
      }
    }
  }
  
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:checked ~ .check-mark {
      background: ${ssbDark5};
    }

    &:checked ~ .check-mark:after {
      display: block;
    }
  }

  label {
    cursor: pointer;
  }
  
`;

Checkbox.defaultProps = {
	callback: () => {},
	index: 1,
};

Checkbox.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	disabled: PropTypes.bool,
};

export default Checkbox;
