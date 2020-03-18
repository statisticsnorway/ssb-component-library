import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = ({
	className, items, labelNext, labelPrevious, onSelect, selectedPage,
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
		<nav className={`ssb-pagination${className ? ` ${className}` : ''}`}>
			<button
				className="direction-button previous"
				onClick={() => handleSelection(items[items.indexOf(selected) - 1])}
				disabled={selected === items[0]}
			>	<ChevronLeft size={16} className="chevron-icon" />
				<span>{labelPrevious}</span>
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
			<button
				className="direction-button next"
				onClick={() => handleSelection(items[items.indexOf(selected) + 1])}
				disabled={selected === items[items.length - 1]}
			>	<span>{labelNext}</span>
				<ChevronRight size={16} className="chevron-icon" />
			</button>
		</nav>
	);
};

Pagination.defaultProps = {
	onSelect: () => {},
	labelNext: 'Next',
	labelPrevious: 'Previous',
};

Pagination.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		path: PropTypes.string,
	})).isRequired,
	labelNext: PropTypes.string,
	labelPrevious: PropTypes.string,
	onSelect: PropTypes.func,
	selectedPage: PropTypes.object,
};

export default Pagination;
