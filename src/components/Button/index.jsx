import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5, ssbDark2, ssbGreen4, ssbGreen5, ssbWhite } from '../../style/colors';
import { roboto } from '../../style/mixins';

const Button = ({
	disabled, icon, onClick, primary, text, type,
}) => (
	<ButtonWrapper
		type={type}
		className={`${primary ? 'primary' : 'secondary'}`}
		onClick={onClick}
		disabled={disabled}
		primary={primary}
	> {icon}
		<ButtonText className="button-text">{text}</ButtonText>
	</ButtonWrapper>
);

const ButtonWrapper = styled.button`
  align-items: center;
  background: ${props => (props.primary ? ssbGreen4 : ssbWhite)};
  border: ${props => (props.primary ? 'none' : `border: 1px solid ${ssbGreen4}`)};
  border-radius: 2px;
  color: ${props => (props.primary ? ssbWhite : ssbGreen4)};
  display: flex;
  height: fit-content;
  margin-right: 20px;
  padding: 10px 20px;
  
  &:hover {
  	background: ${props => (props.primary ? ssbGreen5 : ssbGreen4)};
  	color: ${ssbWhite};
  }
	
  &:active { background: ${props => (props.primary ? ssbDark5 : ssbGreen5)}; }
  &:hover, &:active { cursor: pointer; }
  &:disabled { cursor: not-allowed; }
  ${props => (props.disabled && `
  	background: ${props.primary ? ssbDark2 : ssbWhite};
  	color: ${props.primary ? ssbWhite : ssbDark2};
  	
  	&:hover {
			background: ${props.primary ? ssbDark2 : ssbWhite};
			color: ${props.primary ? ssbWhite : ssbDark2};
  `)}
`;

const ButtonText = styled.span`
	${roboto};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

Button.defaultProps = {
	disabled: false,
	onClick: () => {},
	primary: false,
	type: 'button',
};

Button.propTypes = {
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	text: PropTypes.string,
	type: PropTypes.string,
};

export default Button;
