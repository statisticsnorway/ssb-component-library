import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	children, className, href, icon, isExternal, linkType, negative,
}) => {
	const classNames = `ssb-link${linkType ? ` ${linkType}` : ''}${negative ? ' negative' : ''}${icon ? ' with-icon' : ''}${className ? ` ${className}` : ''}`;

	return (
		<a
			className={classNames}
			href={href}
			target={isExternal ? '_blank' : ''}
			rel={isExternal ? 'noopener noreferrer' : ''}
		>{icon && <div className="icon-wrapper">{icon}</div>}
			<span className="link-text">{children}</span>
		</a>
	);
};

Link.defaultProps = {
	className: '',
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
