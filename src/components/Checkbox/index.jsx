import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
	index, children, callback, selected, value, disabled,
}) => (
	<div tabIndex={index + 1} className={`checkbox-button-wrapper${disabled ? ' disabled' : ''}`}>
		<label htmlFor={value}>
			{children}
			<input
				id={value}
				value={value}
				type="checkbox"
				checked={selected}
				onChange={() => callback(value)}
			/>
			<span className="check-mark" />
		</label>
	</div>
);

Checkbox.defaultProps = {
	callback: () => {},
	index: 1,
};

Checkbox.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	disabled: PropTypes.bool,
};

export default Checkbox;
