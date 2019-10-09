import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { ssbDark4, ssbDark6, ssbGreen2, ssbGreen4, ssbWhite } from '../../style/colors'
import { ChevronDown } from 'react-feather'

const Dropdown = ({
	header, items, onSelect, open, placeholder, searchable, selectedItem,
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
		<DropdownWrapper>
			{header && <label htmlFor={id}>{header}</label>}
			<div className="dropdown-interactive-area" ref={node} onClick={() => setOpen(!isOpen)}>
				<div className="input-container">
					<input
						className={isOpen ? 'focused' : ''}
						id={id}
						onChange={e => filterItems(e)}
						disabled={!searchable}
						placeholder={selectedOption.title ? selectedOption.title : placeholder}
						value={inputFieldValue}
					/>
					<ChevronDown className="chevron-icon" size={18} />
				</div>
				{isOpen && (
					<OptionListWrapper>
							{availableOptions.map(it => (
								<li
									className={`option-list-element ${selectedOption.id === it.id && 'selected'}`}
									key={it.id}
								>
									<option
										onClick={() => handleSelection(it)}
										value={it.id}
										id={it.id}
									>{it.title}
									</option>
								</li>
							))}
					</OptionListWrapper>
				)}
				</div>
		</DropdownWrapper>
	);
};

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all .25s ease-in-out;
  
  label {
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .dropdown-interactive-area {
    cursor: pointer;
    position: relative;
    
    .input-container {
			input {
				border: 1px solid ${ssbDark6};
				cursor: pointer;
				font-size: 16px;
				height: 36px;
				padding: 4px 34px 4px 10px;
				background-color: ${ssbWhite};
				font-family: 'Roboto', sans-serif;
				width: 100%;
	
				&::placeholder {
					color: ${ssbDark6};
				}
	
				&:hover {
					border: 1px solid ${ssbGreen4};
				}
	
				&:focus, &.focused {
					border: 1px solid ${ssbGreen4};
					outline: ${ssbGreen4} auto 1px;
				}
			}
			
			.chevron-icon {
				color: ${ssbGreen4};
				position: absolute;
				top: 10px;
				right: 10px;
			}
    }    
  }
}
`;

const OptionListWrapper = styled.ul`
  background: ${ssbWhite};
	border: 1px solid #2b2b2b;
	left: 0;
	list-style: none;
	margin: 0;
	padding-left: 0;
	position: absolute;
	top: 36px;
	z-index: 9999;
	width: 100%;
	font-family: 'Roboto', sans-serif;
	
	height: 235px;
	overflow-y: scroll;
	scrollbar-color: #6f9090 ${ssbWhite};
	scrollbar-width: thin;	
	
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: ${ssbWhite}; 
	}
	::-webkit-scrollbar-thumb { 
		background: #6f9090; 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${ssbDark4}; 
	}

	.option-list-element {
		cursor: pointer;

		option {
			overflow: hidden;
			padding: 10px;
			text-overflow: ellipsis;
		}

		&:hover {
			background: ${ssbGreen2};
		}

		&.selected {
			background: ${ssbGreen4};
			color: ${ssbWhite};
		}
	}
`;

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
};

export default Dropdown;
