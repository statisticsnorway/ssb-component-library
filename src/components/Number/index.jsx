import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ssbDark5 } from '../../style/colors';
import { robotoCondenced } from '../../style/mixins';

const formatNumber = num => num.toString()
	.replace(/\D+/g, '') // remove everything that is not a number
	.replace(/(\d)(?=(\d{3})+(?!\d))/g, ' '); // add spaces in desired format

const Number = ({
	size, number,
}) => (
	<NumberWrapper size={size}>
		{formatNumber(number)}
	</NumberWrapper>
);

const NumberWrapper = styled.div`
	${robotoCondenced};
	color: ${ ssbDark5 };
	font-size: ${props => props.size === 'small' ? '50px' : props.size === 'medium' ? '100px' : '150px'};
	font-weight: bold;
`;

Number.defaultProps = {
	size: 'small',
};

Number.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Number;
