import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({
	children, href, icon, isExternal, linkType, negative,
}) => {
	const classNames = classnames('ssb-link', {
		profiled: linkType === 'profiled',
		header: linkType === 'header',
		negative,
		'with-icon': icon,
	});

	return (
		<a
			className={classNames}
			href={href}
			target={isExternal ? '_blank' : ''}
			rel={isExternal ? 'noopener noreferrer' : ''}
		>{icon}
			<span className="link-text">{children}</span>
		</a>
	);
};

Link.defaultProps = {
	isExternal: false,
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
