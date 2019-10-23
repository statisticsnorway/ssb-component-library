import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
	index, children, callback, disabled, selected, value,
}) => (
	<div className="ssb-checkbox" tabIndex={index + 1}>
		<input
			disabled={disabled}
			id={value}
			checked={selected}
			onChange={() => callback(value)}
			type="checkbox"
			value={value}
		/>
		<label className="checkbox-label" htmlFor={value}>{children}</label>
	</div>
);

Checkbox.defaultProps = {
	callback: () => {},
	index: 1,
};

Checkbox.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node,
	disabled: PropTypes.bool,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Checkbox;
