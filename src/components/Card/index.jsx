import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'react-feather';

const Card = ({
	centered, children, fileLocation, image, imagePlacement, onClick,
}) => (
	<div className="ssb-card">
		<button
			className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
			onClick={() => onClick}
		>
			{image}
			<div className={`card-content${centered ? ' centered' : ''}`}>
				{ children }
			</div>
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
	imagePlacement: 'top',
	onClick: () => {},
};

Card.propTypes = {
	centered: PropTypes.bool,
	children: PropTypes.node.isRequired,
	fileLocation: PropTypes.string,
	image: PropTypes.element,
	imagePlacement: PropTypes.oneOf(['left', 'top']),
	onClick: PropTypes.func,
};

export default Card;
