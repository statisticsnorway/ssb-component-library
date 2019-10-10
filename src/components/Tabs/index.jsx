import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5, ssbGreen2, ssbGreen3, ssbGreen4 } from '../../style/colors';
import { roboto } from '../../style/mixins';

const Tabs = ({
	activeOnInit, items, onClick,
}) => {
	const [activeItem, changeActive] = useState(activeOnInit);

	const handleClick = e => {
		onClick(e);
		changeActive(e);
	};

	return (
		<Wrapper>
			{items.map(item => (
				<NavigationItem
					onClick={() => handleClick(item.path)}
					key={item.path}
				>
					<ButtonText>{item.title}</ButtonText>
					<ActiveIndicator active={activeItem === item.path} />
				</NavigationItem>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const NavigationItem = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: center;
	padding: 10px;
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: background .2s;
	
	&:hover {
		background: ${ssbGreen2};
	}
	
	&:focus {
		outline: ${ssbGreen4} auto 5px;
		outline-offset: -2px;
	}
`;

const ButtonText = styled.span`
	${roboto};
	color: ${ssbDark5}
`;

const ActiveIndicator = styled.div`
	background: ${ssbGreen3};
	bottom: 0;
	height: ${props => props.active ? '5px' : 0};
	left: 0;
	position: absolute;
	transition: height .2s;
	width: 100%;
`;

Tabs.defaultProps = {
	activeOnInit: '',
	onClick: () => {},
};

Tabs.propTypes = {
	activeOnInit: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		path: PropTypes.string,
	})),
	onClick: PropTypes.func,
};

export default Tabs;
