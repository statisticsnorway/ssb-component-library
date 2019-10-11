import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark2, ssbDark5 } from '../../style/colors';

const Divider = ({ className, dark, light }) => (
	<DividerWrapper
		className={className}
		dark={dark}
		light={light}
	/>
);

const DividerWrapper = styled.hr`
	border-top: 1px solid;
	border-top-color: ${props => (props.dark ? ssbDark5 : ssbDark2)};	
	display: block;
  height: 2px;
  margin: 0;
  position: relative;
  width: 100%;
`;

Divider.defaultProps = {
	className: '',
	dark: false,
	light: false,
};

Divider.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	light: PropTypes.bool,
};

export default Divider;
