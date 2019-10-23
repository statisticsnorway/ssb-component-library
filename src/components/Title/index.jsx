import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, className, negative, size }) => (
	<div
		className={`ssb-title${negative ? ' negative' : ''}`}
	>
		{size === 1 && <h1 className={className}>{children}</h1>}
		{size === 2 && <h2 className={className}>{children}</h2>}
		{size === 3 && <h3 className={className}>{children}</h3>}
		{size === 4 && <h4 className={className}>{children}</h4>}
		{size === 5 && <h5 className={className}>{children}</h5>}
		{size === 6 && <h6 className={className}>{children}</h6>}
	</div>
);

Title.defaultProps = {
	negative: false,
	size: 1,
};

Title.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
	size: PropTypes.oneOf([
		1, 2, 3, 4, 5, 6
	]),
};

export default Title;
