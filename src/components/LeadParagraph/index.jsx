import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark6 } from '../../style/colors';
import { openSans } from '../../style/mixins';

const LeadParagraph = ({ children }) => <Wrapper>{ children }</Wrapper>;

const Wrapper = styled.p`
	${openSans};
	color: ${ssbDark6};
	font-size: 20px;
	line-height: 1.7;
`;

LeadParagraph.propTypes = { children: PropTypes.node };

export default LeadParagraph;
