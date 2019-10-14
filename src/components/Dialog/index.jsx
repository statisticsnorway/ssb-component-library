import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AlertCircle, AlertTriangle } from 'react-feather';
import Link from '../Link/index.jsx';
import Paragraph from '../Paragraph/index.jsx';
import { ssbBlue3, ssbRed4, ssbWhite } from '../../style/colors';
import { openSans } from '../../style/mixins';

const Dialog = ({href, linkText, text, title, type}) => (
	<Wrapper>
		<IconBar type={type}>
			{type === 'warning' && <AlertTriangle size="36" />}
			{type === 'info' && <AlertCircle size="36" />}
		</IconBar>
		<InfoContent type={type}>
			<span><strong>{title}</strong></span>
			<Paragraph>{text}</Paragraph>
			{href && <Link href={href}>{linkText}</Link>}
		</InfoContent>
	</Wrapper>
);

const contentPadding = '20px';

const Wrapper = styled.div`
	${openSans};
	display: flex;
	margin: ${contentPadding};
	max-width: 880px;
	min-height: 95px;
`;

const IconBar = styled.div`
	background: ${props => (props.type === 'warning' ? ssbRed4 : ssbBlue3)};
	color: ${ssbWhite};
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	padding-top: ${contentPadding};
	width: 78px;
`;

const InfoContent = styled.div`
	border: 2px solid ${props => (props.type === 'warning' ? ssbRed4 : ssbBlue3)};
	padding: ${contentPadding};
`;

Dialog.defaultProps = {
	type: 'info',
};

Dialog.propTypes = {
	href: PropTypes.string,
	linkText: PropTypes.string,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf([
		'info',
		'warning',
	]),
};

export default Dialog;
