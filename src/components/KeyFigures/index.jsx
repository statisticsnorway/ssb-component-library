import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Number from '../Number/index.jsx';
import { ssbDark5 } from '../../style/colors';
import Title from '../Title';
import { roboto } from '../../style/mixins';

const KeyFigures = ({	icon, number, numberDescription, size, title, year }) => (
	<Wrapper>
		<IconContainer>{icon}</IconContainer>
		<div>
			<Title noMargin size={4}>{title}</Title>
			<div>{year}</div>
			<Number size={size} number={number} />
			<Title noMargin size={4}>{numberDescription}</Title>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	${roboto};
	display: inline-grid;
	grid-auto-flow: column;
`;

const IconContainer = styled.div`
	color: ${ssbDark5};
`;

KeyFigures.defaultProps = {};

KeyFigures.propTypes = {
	icon: PropTypes.node,
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	numberDescription: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	title: PropTypes.string,
	year: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

export default KeyFigures;
