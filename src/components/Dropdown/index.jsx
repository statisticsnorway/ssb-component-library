import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'react-feather';
import uuid from 'uuid/v4';

const Dropdown = ({
	header, items, onSelect, open, placeholder, searchable, selectedItem, tabIndex,
}) => {
	const id = uuid();
	const node = useRef();
	const [isOpen, setOpen] = useState(open);
	const [availableOptions, filterOptions] = useState(items);
	const [selectedOption, selectItem] = useState(selectedItem || { title: '', id: '' });
	const [inputFieldValue, updateInputValue] = useState('');

	const filterItems = event => {
		updateInputValue(event.target.value);
		filterOptions(items.filter(it => it.title.toLowerCase().includes(event.target.value.toLowerCase())));
	};

	const handleSelection = item => {
		selectItem({ title: item.title, id: item.id });
		onSelect(item);
		setOpen(false);
		filterOptions(items);
		updateInputValue('');
	};

	const handleClickOutside = e => {
		if (!node.current.contains(e.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="ssb-dropdown">
			{header && <label htmlFor={id}>{header}</label>}
			<button className="dropdown-interactive-area" tabIndex={tabIndex} ref={node} onClick={() => setOpen(!isOpen)}>
				<input
					className={isOpen ? 'focused' : ''}
					id={id}
					onChange={e => filterItems(e)}
					disabled={!searchable}
					placeholder={selectedOption.title ? selectedOption.title : placeholder}
					value={inputFieldValue}
				/>
				<div className="dd-icon"><ChevronDown size={18}/></div>
				{isOpen && (
					<div className="list-of-options">
						{availableOptions.map(it => (
							<button
								className={`option-list-element${selectedOption.id === it.id ? ' selected' : ''}`}
								key={it.id}
								onClick={() => handleSelection(it)}
								value={it.id}
								id={it.id}
							>{it.title}
							</button>
						))}
					</div>
				)}
			</button>
		</div>
	);
};

Dropdown.defaultProps = {
	header: '',
	items: [{ id: '', title: '' }],
	onSelect: () => {},
	open: false,
	searchable: false,
	placeholder: '-- Select --',
};

Dropdown.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.string,
	})),
	onSelect: PropTypes.func,
	open: PropTypes.bool,
	placeholder: PropTypes.string,
	searchable: PropTypes.bool,
	selectedItem: PropTypes.object,
	tabIndex: PropTypes.number,
};

export default Dropdown;
