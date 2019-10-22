import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	children, disabled, onClick, primary, type,
}) => (
	<button
		type={type}
		className={`ssb-btn ${primary ? 'primary-btn' : 'secondary-btn'}`}
		onClick={onClick}
		disabled={disabled}
	> {children}
	</button>
);

Button.defaultProps = {
	disabled: false,
	onClick: () => {},
	primary: false,
	type: 'button',
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	type: PropTypes.string,
};

export default Button;
