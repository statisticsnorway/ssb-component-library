import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
	index, children, callback, disabled, selected, value
}) => (
	<div className="ssb-radio" tabIndex={index + 1}>
		<input
			checked={selected}
			id={value}
			disabled={disabled}
			onChange={() => callback(value)}
			type="radio"
			value={value}
		/>
		<label className="radio-label" htmlFor={value}>{children}</label>
	</div>
);

RadioButton.defaultProps = {
	callback: () => {},
	disabled: false,
	index: 1,
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default RadioButton;
