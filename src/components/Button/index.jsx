import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	disabled, icon, onClick, primary, text, type,
}) => (
	<button
		type={type}
		className={
			`button-container ${primary ? 'primary' : 'secondary'}`
		}
		onClick={onClick}
		disabled={disabled}
	>	{icon}

		<span className="button-text">{text}</span>
	</button>
);

Button.defaultProps = {
	disabled: false,
	onClick: () => {},
	primary: false,
	type: 'button',
};

Button.propTypes = {
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	text: PropTypes.string,
	type: PropTypes.string,
};

export default Button;
