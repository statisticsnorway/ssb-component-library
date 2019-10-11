import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { roboto, robotoCondenced } from '../../style/mixins';
import { ssbDark6, ssbWhite } from '../../style/colors';

const Title = ({ children, className, negative, size }) => (
	<TitleWrapper
		className={className}
		negative={negative}
	>
		{size === 1 && <h1>{children}</h1>}
		{size === 2 && <h2>{children}</h2>}
		{size === 3 && <h3>{children}</h3>}
		{size === 4 && <h4>{children}</h4>}
		{size === 5 && <h5>{children}</h5>}
		{size === 6 && <h6>{children}</h6>}
	</TitleWrapper>
);

const TitleWrapper = styled.div`
	color: ${props => (props.negative ? ssbWhite : ssbDark6)};

	h1 {
		${robotoCondenced};
		font-size: 56px;
		font-weight: bold;
		line-height: 1.4;
	}

	h2 {
		${robotoCondenced};
		font-size: 28px;
		font-weight: bold;
		line-height: 1.5;
	}

	h3 {
		${robotoCondenced};
		font-size: 24px;
		font-weight: bold;
		line-height: 1.6;
	}

	h4 {
		${roboto};
		font-size: 20px;
		font-weight: bold;
		line-height: 1.7;
	}

	h5 {
		${roboto};
		font-size: 18px;
		font-weight: bold;
		line-height: 1.7;
	}

	h6 {
		${roboto};
		font-size: 16px;
		font-weight: bold;
		line-height: 1.7;
	}
`;

Title.defaultProps = {
	negative: false,
	size: 1,
};

Title.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
	size: PropTypes.number,
};

export default Title;
