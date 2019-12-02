import React from 'react';
import PropTypes from 'prop-types';

const Number = ({
	children, size,
}) => (
	<div className={`ssb-number ${size}`}>
		{children}
	</div>
);

Number.defaultProps = {
	size: 'small',
};

Number.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Number;
