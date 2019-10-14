import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbGreen3, ssbWhite } from '../../style/colors';
import { openSans, roboto } from '../../style/mixins';

const BlockContent = ({children, pageNumber}) => (
	<Wrapper>
		<GreenLine />
		{pageNumber && <PageNumber><span>{pageNumber}</span></PageNumber>}
		{children}
	</Wrapper>
);

const Wrapper = styled.div`
	${openSans};
	background: ${ssbWhite};
	box-shadow: 0 2px 4px 1px rgba(200, 200, 200, .5);
	box-sizing: border-box;
	max-width: 1200px;
	padding: 100px;
	position: relative;
	width: 100%;
`;

const GreenLine = styled.div`
	background: ${ssbGreen3};
	height: 4px;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const PageNumber = styled.div`
	${roboto};
	color: #667b7f;
	font-size: 30px;
	margin-top: -35px;
	
	&:before {
		background: ${ssbGreen3};
		content: '';
		display: inline-block;
		height: 22px;
		margin-right: 10px;
		width: 10px;
	}
`;

BlockContent.propTypes = {
	children: PropTypes.node.isRequired,
	pageNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BlockContent;
