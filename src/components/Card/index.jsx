import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'react-feather';

const Card = ({
	centered, children, fileLocation, onClick,
}) => (
	<div className="ssb-card">
		<button className={`card-content${centered ? ' centered' : ''}`} onClick={() => onClick}>
			{ children }
		</button>
		{fileLocation && (
			<a download href={fileLocation} className="download-section">
				<Download className="download-icon" />
				<span>Last ned</span>
			</a>
		)}
	</div>
);

Card.defaultProps = {
	centered: false,
	onClick: () => {},
};

Card.propTypes = {
	centered: PropTypes.bool,
	children: PropTypes.node.isRequired,
	fileLocation: PropTypes.string,
	onClick: PropTypes.func,
};

export default Card;
