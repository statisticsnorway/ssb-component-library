import React from 'react';
import PropTypes from 'prop-types';

function Number({
	children, className, size,
}) {
	return (
		<div className={`ssb-number ${size}${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	);
}

Number.defaultProps = {
	size: 'small',
};

Number.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Number;
