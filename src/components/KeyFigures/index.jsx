import React from 'react';
import PropTypes from 'prop-types';
import Number from '../Number';
import Title from '../Title';
import WordExplanation from '../WordExplanation';

const KeyFigures = ({	icon, number, numberDescription, size, title, time, wordExplanation }) => (
	<div className="ssb-key-figures">
		<div className={`kf-icon ${size}`}>{icon}</div>
		<div>
			{wordExplanation ?
				<WordExplanation explanation={'fsf'}>
					<span className="kf-title">{title}</span>
				</WordExplanation>
				: <span className="kf-title">{title}</span>
			}
			<div className="kf-time">{time}</div>
			<Number size={size} number={number} />
			<Title className="kf-title" size={4}>{numberDescription}</Title>
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
	wordExplanation: PropTypes.string,
};

export default KeyFigures;
