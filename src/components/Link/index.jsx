import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	children, href, icon, isExternal, linkType, negative,
}) => (
	<div className={`link ${negative ? 'negative' : 'standard'}`}>
		<div className="index">
			<a
				className={`link-text ${linkType} ${icon && 'with-icon'}`}
				href={href}
				target={isExternal ? '_blank' : ''}
				rel={isExternal ? 'noopener noreferrer' : ''}
			>{icon}<span className="link-text">{children}</span>
			</a>
		</div>
		<div className="animate-background" />
	</div>
);

Link.defaultProps = {
	isExternal: false,
	linkType: 'regular',
	negative: false,
};

Link.propTypes = {
	children: PropTypes.node.isRequired,
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
