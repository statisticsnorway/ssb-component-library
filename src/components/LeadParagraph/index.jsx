import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark6, ssbWhite } from '../../style/colors';
import { openSans } from '../../style/mixins';

const LeadParagraph = ({ children, negative }) => <Wrapper negative={negative}>{ children }</Wrapper>;

const Wrapper = styled.p`
	${openSans};
	color: ${props => (props.negative ? ssbWhite : ssbDark6)};
	font-size: 20px;
	line-height: 1.7;
`;

LeadParagraph.propTypes = {
	children: PropTypes.node,
	negative: PropTypes.bool,
};

export default LeadParagraph;
