import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ChevronDown, ChevronUp } from 'react-feather';
import {
	KEY_ARROW_DOWN,
	KEY_ARROW_UP,
	KEY_ENTER,
	KEY_ESCAPE,
	KEY_SPACE,
	KEY_TAB,
} from '../../utils/keybindings';

const Dropdown = ({
	className, header, items, onSelect, open, placeholder, searchable, selectedItem, tabIndex,
}) => {
	const id = uuid();

	// all the refs we need!
	const wrapper = useRef();
	const node = useRef();
	const itemRefs = items.reduce((acc, item, idx) => {
		acc[idx] = useRef();
		return acc;
	}, []);

	const [isOpen, setOpen] = useState(open);
	const [availableOptions, filterAvailableOptions] = useState(items);
	const [selectedOption, selectItem] = useState(selectedItem || { title: '', id: '' });
	const [inputFieldValue, updateInputValue] = useState('');
	const [keyNavPosition, setKeyNavPosition] = useState(0);

	const filterOptions = value => {
		updateInputValue(value);
		filterAvailableOptions(items.filter(it => it.title.toLowerCase().includes(value.toLowerCase())));
	};

	const filterItems = event => {
		filterOptions(event.target.value);
	};

	const handleSelection = item => {
		selectItem({ title: item.title, id: item.id });
		onSelect(item);
		setOpen(false);

		if (items[keyNavPosition].id !== item.id) {
			const idx = items.findIndex(it => it.id === item.id);
			setKeyNavPosition(idx);
		}

		if (searchable) {
			filterAvailableOptions(items);
			updateInputValue('');
		}

		if (node.current) {
			node.current.focus();
		}
	};

	const handleClickOutside = e => {
		if (!wrapper.current.contains(e.target)) {
			setTimeout(() => {
				setOpen(false);
				if (searchable) {
					updateInputValue('');
				}
			}, 100);
		}
	};

	// TODO : See if handleKeyboardNav and handleSearchSpecialKeys can be squashed
	// 		  for DRY principle.

	const handleKeyboardNav = (e, elem = node) => {
		if (e.target === elem.current) {
			if ((e.keyCode === KEY_ARROW_UP) && (keyNavPosition > 0)) {
				setKeyNavPosition(keyNavPosition - 1);
			} else if ((e.keyCode === KEY_ARROW_DOWN) && (keyNavPosition < (items.length - 1))) {
				setKeyNavPosition(keyNavPosition + 1);
			} else if (e.keyCode === KEY_ENTER) {
				e.preventDefault();
				if (isOpen) {
					handleSelection(items[keyNavPosition]);
				} else {
					setOpen(true);
				}
			} else if (e.keyCode === KEY_ESCAPE) {
				if (!searchable) {
					e.preventDefault();
					setOpen(false);
				}
			}
		}
	};

	const handleSearchSpecialKeys = e => {
		if (e.keyCode === KEY_ESCAPE) {
			setOpen(false);
		} else if (e.keyCode === KEY_TAB) {
			setOpen(false);
			// wrapper.sibling.focus();
		} else if ((e.keyCode === KEY_ARROW_DOWN) && (keyNavPosition < (availableOptions.length - 1))) {
			setKeyNavPosition(keyNavPosition + 1);
		} else if ((e.keyCode === KEY_ARROW_UP) && (keyNavPosition > 0)) {
			setKeyNavPosition(keyNavPosition - 1);
		} else if ((e.keyCode === KEY_ENTER) && isOpen) {
			e.preventDefault();
			handleSelection(availableOptions[keyNavPosition]);
		} else {
			setOpen(true);
			if (e.keyCode === KEY_SPACE) {
				if (searchable) {
					e.preventDefault();
					filterOptions(`${e.target.value} `);
				}
			} else {
				filterOptions(e.target.value);
			}
		}
	};

	useEffect(() => {
		if (itemRefs[keyNavPosition].current) {
			itemRefs[keyNavPosition].current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, [keyNavPosition]);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		if (searchable && !inputFieldValue) {
			setKeyNavPosition(0);
		}
	}, [inputFieldValue]);

	return (
		<div className={`ssb-dropdown${className ? ` ${className}` : ''}`}>
			{header && <label htmlFor={id}>{header}</label>}
			<div
				className="dropdown-interactive-area"
				ref={wrapper}
				role="button"
				tabIndex={tabIndex}
				onKeyPress={e => { handleKeyboardNav(e, wrapper); }}
			>
				<button
					aria-label="open or close dropdown"
					ref={node}
					tabIndex={0}
					onClick={() => setOpen(!isOpen)}
					onKeyDown={handleKeyboardNav}
					type="button"
				>
					<input
						className={isOpen ? 'focused' : ''}
						id={id}
						onKeyDown={handleSearchSpecialKeys}
						onChange={filterItems}
						disabled={!searchable}
						placeholder={selectedOption.title ? selectedOption.title : placeholder}
						value={inputFieldValue}
					/>
					{isOpen ? <ChevronUp className="dd-icon" size={24} /> : <ChevronDown className="dd-icon" size={24} /> }
				</button>
				{isOpen && (
					<div className="list-of-options" id={`${id}--options`}>
						{availableOptions.map((it, idx) => {
							const classNames = [
								'option-list-element',
								selectedOption.id === it.id ? 'selected' : '',
								keyNavPosition === idx ? 'active' : '',
							].join(' ');

							return (
								<button
									disabled={it.disabled}
									className={classNames}
									key={it.id}
									onClick={() => { handleSelection(it); }}
									id={it.id}
									ref={itemRefs[idx]}
									type="button"
								>{it.title}
								</button>
							);
						})}
					</div>
				)}
			</div>
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
	className: PropTypes.string,
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.string,
		disabled: PropTypes.boolean,
	})),
	onSelect: PropTypes.func,
	open: PropTypes.bool,
	placeholder: PropTypes.string,
	searchable: PropTypes.bool,
	selectedItem: PropTypes.object,
	tabIndex: PropTypes.number,
};

export default Dropdown;
