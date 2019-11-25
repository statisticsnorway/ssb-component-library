import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = ({
	items, onSelect, selectedPage,
}) => {
	const [selected, setSelected] = useState(selectedPage || items[0]);
	const [currentButtons, updateCurrentButtons] = useState([{}]);
	const [showLeftDots, updateLeftDots] = useState(false);
	const [showRightDots, updateRightDots] = useState(true);

	useEffect(() => {
		const showItems = items;
		if (items.length < 8) {
			updateLeftDots(false);
			updateRightDots(false);
			updateCurrentButtons(items);
		} else if (items.indexOf(selected) < 7) {
			updateLeftDots(false);
			updateCurrentButtons(showItems.slice(0, 8));
			if (items.length > currentButtons.length) {
				updateRightDots(true);
			}
		} else if (items.indexOf(selected) > (items.length - 7)) {
			updateCurrentButtons(showItems.slice((showItems.length - 8), showItems.length));
			updateRightDots(false);
			updateLeftDots(true);
		} else {
			updateCurrentButtons(showItems.slice((showItems.indexOf(selected) - 3), (showItems.indexOf(selected) + 3)));
			updateLeftDots(true);
			updateRightDots(true);
		}
	}, [selected]);

	const handleSelection = sel => {
		setSelected(sel);
		onSelect(sel);
	};

	return (
		<nav className="ssb-pagination">
			<button className="direction-button" onClick={() => handleSelection(items[items.indexOf(selected) - 1])}>
				<ChevronLeft size={18} className="chevron-icon" />
				Forrige
			</button>
			<button className={`nav-button-square${items[0] === selected ? ' selected' : ''}`} onClick={() => handleSelection(items[0])}>
				{items[0].text}
			</button>
			{showLeftDots && <div className="dotted-indicator">...</div>}
			{currentButtons && currentButtons.map(item => (
				item !== items[0] && item !== items[items.length - 1] && (
					<button
						className={`nav-button-square ${item.text}${item === selected ? ' selected' : ''}`}
						onClick={() => handleSelection(item)}
						key={`${item.path}`}
					>{item.text}
					</button>
				)
			))}
			{showRightDots && <div className="dotted-indicator">...</div>}
			<button
				className={`nav-button-square${items[items.length - 1] === selected ? ' selected' : ''}`}
				onClick={() => handleSelection(items[items.length - 1])}
			>{items[items.length - 1].text}
			</button>
			<button className="direction-button" onClick={() => handleSelection(items[items.indexOf(selected) + 1])}>
				<span>Neste</span>
				<ChevronRight size={18} className="chevron-icon" />
			</button>
		</nav>
	);
};

Pagination.defaultProps = {
	onSelect: () => {},
};

Pagination.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		path: PropTypes.string,
	})).isRequired,
	onSelect: PropTypes.func,
	selectedPage: PropTypes.object,
};

export default Pagination;
