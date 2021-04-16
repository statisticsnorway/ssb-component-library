import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	ariaLabel, children, className, href, icon, isExternal, linkType, negative, tabIndex, title,
}) => {
	const classNames = `ssb-link${linkType ? ` ${linkType}` : ''}${negative ? ' negative' : ''}${icon ? ' with-icon' : ''}${className ? ` ${className}` : ''}`;

	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			className={classNames}
			href={href}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			tabIndex={tabIndex}
			aria-label={ariaLabel}
			title={title}
		>{icon && <div className="icon-wrapper">{icon}</div>}
			{children && <span className="link-text">{children}</span>}
		</a>
	);
};

Link.defaultProps = {
	className: '',
	isExternal: false,
	negative: false,
};

Link.propTypes = {
	ariaLabel: PropTypes.string,
	children: PropTypes.node,
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
	tabIndex: PropTypes.number,
	title: PropTypes.string,
};

export default Link;
