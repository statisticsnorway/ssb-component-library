import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5, ssbDark6, ssbWhite } from '../../style/colors';

const Text = ({ children, className, negative, small }) => (
	<TextWrapper
		className={className}
		negative={negative}
		small={small}
	>{ children }
	</TextWrapper>
);

const TextWrapper = styled.span`
	background-color: ${props => (props.negative ? ssbDark5 : '')};
	color: ${props => (props.negative ? ssbWhite : ssbDark6)};
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => (props.small ? '14px' : '16px')};
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1.7;
`;

Text.defaultProps = {
	className: '',
	negative: false,
	small: false,
};

Text.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
	small: PropTypes.bool,
};

export default Text;
