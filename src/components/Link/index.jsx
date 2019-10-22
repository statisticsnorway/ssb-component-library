import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	children, className, href, icon, isExternal, linkType, negative,
}) => (
	<a
		className={`ssb-link ${linkType || ''} ${icon ? 'with-icon' : ''} ${negative ? 'negative' : ''} ${className || ''}`}
		href={href}
		target={isExternal ? '_blank' : ''}
		rel={isExternal ? 'noopener noreferrer' : ''}
	>{icon}
		<span className="link-text">{children}</span>
	</a>
);

Link.defaultProps = {
	isExternal: false,
	negative: false,
};

Link.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.node,
	isExternal: PropTypes.bool,
	linkType: PropTypes.oneOf([
		'regular',
		'profiled',
		'header',
	]),
	negative: PropTypes.bool,
};

export default Link;
