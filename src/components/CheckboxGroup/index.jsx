import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../Checkbox/index.jsx';
import Title from '../Title/index.jsx';
import { roboto } from '../../style/mixins';

const CheckboxGroup = ({
	header, items, onChange, selectedValues,
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
		<CheckboxGroupWrapper>
			{header && <Title size={5}>{header}</Title>}
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
		</CheckboxGroupWrapper>
	);
};

const CheckboxGroupWrapper = styled.div`
	${roboto};
	display: inline-block;

	fieldset {
	  border: 0;
	}
  
	h5 {
	  margin-bottom: 10px;
	  padding-left: 10px;
	}
  
`;

CheckboxGroup.defaultProps = {
	onChange: () => {},
	selectedValues: [''],
};

CheckboxGroup.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	selectedValues: PropTypes.array,
};

export default CheckboxGroup;
