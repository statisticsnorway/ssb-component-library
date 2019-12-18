import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
	<div className="ssb-footer-wrapper">
		{children}
	</div>
);

Footer.defaultProps = {};

Footer.propTypes = {
	children: PropTypes.node,
};

export default Footer;
