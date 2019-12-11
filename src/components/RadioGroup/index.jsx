import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import RadioButton from '../RadioButton';

const RadioGroup = ({ groupName, header, items, onChange, orientation, selectedValue }) => {
	const [selected, updateSelected] = useState(selectedValue);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	return (
		<div className="ssb-radio-group">
			{header && <div className="radio-group-header">{header}</div>}
			<div className={`boxes flex-${orientation}`}>
				{items.map((it, index) => (
					<RadioButton
						key={it.value}
						index={index}
						selected={it.value === selected}
						value={it.value}
						name={groupName || header}
						callback={updateSelected}
						disabled={it.disabled}
					>{it.label}
					</RadioButton>
				))}
			</div>
		</div>
	);
};

RadioGroup.defaultProps = {
	onChange: () => {},
	orientation: 'column',
};

RadioGroup.propTypes = {
	groupName: PropTypes.string,
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	orientation: PropTypes.oneOf([
		'column',
		'row',
	]),
	selectedValue: PropTypes.string,
};

export default RadioGroup;
