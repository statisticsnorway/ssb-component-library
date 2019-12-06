import React from 'react';
import PropTypes from 'prop-types';
import Number from '../Number';
import Glossary from '../Glossary';

const KeyFigures = ({	icon, number, numberDescription, size, title, time, glossary }) => (
	<div className={`ssb-key-figures ${size}`}>
		{icon && <div className={`kf-icon ${size}`}>{icon}</div>}
		<div>
			{glossary
				? (
					<Glossary explanation={glossary}>
						<span className="kf-title">{title}</span>
					</Glossary>
				)
				: <span className="kf-title">{title}</span>}
			<div className="kf-time">{time}</div>
			{number
				? (
					<div className="number-section">
						<Number size={size}>{number}</Number>
						<span className="kf-title subtitle">{numberDescription}</span>
					</div>
				)
				: <span className="no-number">Tall ikke tilgjengelig</span>}
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
	time: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	glossary: PropTypes.string,
};

export default KeyFigures;
