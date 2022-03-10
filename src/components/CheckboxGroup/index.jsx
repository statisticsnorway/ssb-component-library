import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';

const CheckboxGroup = ({
	className, header, items, onChange, orientation, selectedValues,
}) => {
	const [selected, updateSelected] = useState(selectedValues);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	const setSelected = sel => {
		const newArr = [...selected];
		if (selected.includes(sel)) {
			newArr.splice(selected.indexOf(sel), 1);
		} else {
			newArr.push(sel);
		}
		updateSelected(newArr);
	};

	return (
		<div className={`ssb-checkbox-group${className ? ` ${className}` : ''}`}>
			{header && <div className="checkbox-group-header">{header}</div>}
			<div className={`boxes flex-${orientation}`}>
				{items.map((it, index) => (
					<Checkbox
						key={it.value}
						index={index}
						selected={selected.includes(it.value)}
						value={it.value}
						callback={setSelected}
						disabled={it.disabled}
					>{it.label}
					</Checkbox>
				))}
			</div>
		</div>
	);
};

CheckboxGroup.defaultProps = {
	onChange: () => {},
	orientation: 'column',
	selectedValues: [''],
};

CheckboxGroup.propTypes = {
	className: PropTypes.string,
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
	selectedValues: PropTypes.array,
};

export default CheckboxGroup;
