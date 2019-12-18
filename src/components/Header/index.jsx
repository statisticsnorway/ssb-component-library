import React from 'react';
import PropTypes from 'prop-types';

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
