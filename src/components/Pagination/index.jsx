import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4'
import { ChevronLeft, ChevronRight } from 'react-feather';
import { ssbGreen4, ssbWhite } from '../../style/colors';
import { roboto } from '../../style/mixins';

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
		<PaginationWrapper>
			<DirectionButton onClick={() => handleSelection(items[items.indexOf(selected) - 1])}>
				<ChevronLeft className="icon" size={18} />
				<span>Forrige</span>
			</DirectionButton>
			<NavButton
				selected={items[0] === selected}
				onClick={() => handleSelection(items[0])}
			>{items[0].text}
			</NavButton>
			{showLeftDots && <DottedIndicator>...</DottedIndicator>}
			{currentButtons && currentButtons.map(item => (
				item !== items[0] && item !== items[items.length - 1] && (
					<NavButton
						selected={item === selected}
						onClick={() => handleSelection(item)}
						key={uuid}
					>{item.text}
					</NavButton>
				)
			))}
			{showRightDots && <DottedIndicator>...</DottedIndicator>}
			<NavButton
				selected={items[items.length - 1] === selected}
				onClick={() => handleSelection(items[items.length - 1])}
			>{items[items.length - 1].text}
			</NavButton>
			<DirectionButton onClick={() => handleSelection(items[items.indexOf(selected) + 1])}>
				<span>Neste</span>
				<ChevronRight className="icon" size={18} />
			</DirectionButton>
		</PaginationWrapper>
	);
};

const PaginationWrapper = styled.nav`
	align-items: center;
  display: flex;
  ${roboto}
`;

const DirectionButton = styled.div`
	align-items: center;
	border: 1px solid transparent;
	cursor: pointer;
	display: flex;
	height: 30px;
	justify-content: center;
	width: 80px;
	
	.icon {
		color: ${ssbGreen4};
	}
	
	&:hover {
		border: 1px solid ${ssbGreen4};
		border-radius: 2px;
		color: ${ssbGreen4};
		font-weight: bold;
	}
`;

const NavButton = styled.div`
	align-items: center;
	background: ${props => (props.selected ? ssbGreen4 : ssbWhite)};
	border-radius: 2px;
	color: ${props => (props.selected ? ssbWhite : ssbGreen4)};
	cursor: pointer;
	display: flex;
	height: 30px;
	justify-content: center;
	margin: 0 10px;
	width: 30px;
	
	&:hover {
		border: 1px solid ${ssbGreen4};
		border-radius: 2px;
		font-weight: ${props => (props.selected ? 'inherit' : 'bold')};
    }
`;

const DottedIndicator = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 0 10px;
	width: 30px;
`;

Pagination.defaultProps = {
	onSelect: () => {},
};

Pagination.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSelect: PropTypes.func,
	selectedPage: PropTypes.object,
};

export default Pagination;
