import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openSans } from '../../style/mixins';
import { ssbDark6 } from '../../style/colors';

const Paragraph = ({ children }) => <Wrapper className="paragraph-wrapper">{ children }</Wrapper>;

const Wrapper = styled.p`
	${openSans};
	color: ${ssbDark6};
	font-size: 16px;
	line-height: 1.7;
`;

Paragraph.propTypes = { children: PropTypes.node };

export default Paragraph;
