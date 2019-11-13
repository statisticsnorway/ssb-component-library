import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
	callback, children, disabled, selected, tabIndex, value,
}) => (
	<div className="ssb-radio">
		<input
			tabIndex={tabIndex}
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
	tabIndex: 0,
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	selected: PropTypes.bool,
	tabIndex: PropTypes.number,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default RadioButton;
