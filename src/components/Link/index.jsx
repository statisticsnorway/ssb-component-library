import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openSans } from '../../style/mixins';
import { ssbDark6, ssbGreen4, ssbWhite } from '../../style/colors';

const Link = ({
	children, href, icon, isExternal, linkType, negative,
}) => (
	<Wrapper
		href={href}
		target={isExternal ? '_blank' : ''}
		className={`link ${negative ? 'negative' : 'standard'}`}
		rel={isExternal ? 'noopener noreferrer' : ''}
		type={linkType}
		hasIcon={icon}
	>{icon}
		<LinkText blackText={linkType === 'header' || icon}>{children}</LinkText>
	</Wrapper>
);

const Wrapper = styled.a`
	${openSans};
	align-items: center;
	background-image: linear-gradient(120deg, ${ssbGreen4} 0%, ${ssbGreen4} 100%);
	background-position: 0 100%;
	background-repeat: no-repeat;
	background-size: 100% 0;
	border-bottom: ${props => !props.hasIcon && `1px solid ${ssbGreen4}`};
	color: ${ssbGreen4};
	cursor: pointer;
	display: inline-flex;
	font-size: ${props => (props.type === 'regular' ? '16px' : '18px')};
	font-weight: ${props => (props.type === 'regular' ? 'normal' : 'bold')};
	padding: 2px 2px ${props => props.hasIcon ? '0' : '1px'};
	position: relative;
	text-decoration: none;
	transition: background-size 0.2s ease-in, color 0.1s;
	
	&:hover {
		background-size: 100% 100%;
		color: ${ssbWhite};
	}
`;

const LinkText = styled.span`
	color: ${props => props.blackText ? ssbDark6 : ssbGreen4};
	transition: color 0.1s;
	
	${Wrapper}:hover & {
		color: ${ssbWhite};
	}
`;

Link.defaultProps = {
	isExternal: false,
	linkType: 'regular',
	negative: false,
};

Link.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	icon: PropTypes.node,
	isExternal: PropTypes.bool,
	linkType: PropTypes.oneOf([
		'regular',
		'profiled',
		'header',
	]),
	negative: PropTypes.bool,
};

export default Link;
