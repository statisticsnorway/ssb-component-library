import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Link from '../Link';
import SsbLogo from '../../media/ssb-logo-black.svg';


const Header = ({ children }) => (
	<div className="ssb-header-wrapper">
		{children}
	</div>
);

Header.defaultProps = {};

Header.propTypes = {
	children: PropTypes.node,
};

export default Header;
