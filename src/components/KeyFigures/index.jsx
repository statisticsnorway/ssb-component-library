import React from 'react';
import PropTypes from 'prop-types';
import Number from '../Number/index.jsx';
import Title from '../Title/index.jsx';

const KeyFigures = ({	icon, number, numberDescription, size, title, year }) => (
	<div className="ssb-key-figures">
		<div className={`kf-icon ${size}`}>{icon}</div>
		<div>
			<Title className="no-margin" size={4}>{title}</Title>
			<div>{year}</div>
			<Number size={size} number={number} />
			<Title className="no-margin" size={4}>{numberDescription}</Title>
		</div>
	</div>
);

KeyFigures.defaultProps = {};

KeyFigures.propTypes = {
	icon: PropTypes.node,
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	numberDescription: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	title: PropTypes.string,
	year: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

export default KeyFigures;
