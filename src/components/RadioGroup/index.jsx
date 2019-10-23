import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/index.jsx';
import RadioButton from '../RadioButton/index.jsx';

const RadioGroup = ({ header, items, onChange, selectedValue }) => {
	const [selected, updateSelected] = useState(selectedValue);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	return (
		<div className="ssb-radio-group">
			<Title className="radio-group-header no-margin" size={5}>{header}</Title>
			{items.map((it, index) => (
				<RadioButton
					key={it.value}
					index={index}
					selected={it.value === selected}
					value={it.value}
					callback={updateSelected}
					disabled={it.disabled}
				>{it.label}
				</RadioButton>
			))}
		</div>
	);
};

RadioGroup.defaultProps = {
	onChange: () => {},
};

RadioGroup.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	selectedValue: PropTypes.string,
};

export default RadioGroup;
