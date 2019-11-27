import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	children, className, disabled, icon, negative, onClick, primary, type,
}) => (
	<button
		type={type}
		className={`ssb-btn${negative ? ' negative' : ''} ${primary ? 'primary-btn' : 'secondary-btn'} ${className}`}
		onClick={onClick}
		disabled={disabled}
	>
		{icon && <div className="sb-icon">{icon}</div>}
		{children}
	</button>
);

Button.defaultProps = {
	className: '',
	disabled: false,
	negative: false,
	onClick: () => {},
	primary: false,
	type: 'button',
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	negative: PropTypes.bool,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	type: PropTypes.string,
};

export default Button;
