import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children, className }) {
	return (
		<div className={`ssb-footer-wrapper${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	);
}

Footer.defaultProps = {};

Footer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Footer;
