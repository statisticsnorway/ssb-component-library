import React from 'react';
import PropTypes from 'prop-types';
import { ArrowDown, ArrowUp, Minus } from 'react-feather';
import Number from '../Number';
import Glossary from '../Glossary';

const KeyFigures = ({	changes, icon, number, numberDescription, noNumberText, size, title, time, glossary }) => (
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
				: <span className="no-number">{noNumberText}</span>}
			{changes
				&& (
					<div className="kf-changes">
						{changes.changeDirection === 'up' && (<ArrowUp className="expand-icon" size={20} />)}
						{changes.changeDirection === 'down' && (<ArrowDown className="expand-icon" size={20} />)}
						{changes.changeDirection === 'same' && (<Minus className="expand-icon" size={20} />)}
						<span className="changes-text">{changes.changeText}</span>&nbsp;
						<span className="changes-periode">{changes.changePeriode}</span>
					</div>
				)}
		</div>
	</div>
);

KeyFigures.defaultProps = {
	noNumberText: 'Tall ikke tilgjengelig',
};

KeyFigures.propTypes = {
	changes: PropTypes.shape({
		changeDirection: PropTypes.oneOf(['up', 'down', 'same']),
		changeText: PropTypes.string,
		changePeriode: PropTypes.string,
	}),
	icon: PropTypes.node,
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	numberDescription: PropTypes.string,
	noNumberText: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	title: PropTypes.string,
	time: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	glossary: PropTypes.string,
};

export default KeyFigures;
