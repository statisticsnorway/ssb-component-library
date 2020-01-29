import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Download } from 'react-feather';

const Card = ({
	centered, children, downloadText, fileLocation, href, hrefText, image, imagePlacement, subTitle, title,
}) => (
	<div className="ssb-card">
		<a
			href={href}
			className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
		>
			{image && <div className="card-image">{image}</div>}
			<div className={`card-content${centered ? ' centered' : ''}${image ? ' with-image' : ''}`}>
				{subTitle && <div className="card-subtitle">{subTitle}</div>}
				{title && <div className="card-title">{title}</div>}
				{ children }
				{(!image && !hrefText) && (
					<ArrowRight className="arrow-icon" size={22} />
				)}
				{(!image && hrefText) && (
					<div className="card-action">
						<ArrowRight className="arrow-icon" size={16} />
						<div className="href-text">{hrefText}</div>
					</div>
				)}
			</div>
		</a>
		{fileLocation && (
			<a download href={fileLocation} className="download-section">
				<Download className="download-icon" />
				<span>{downloadText}</span>
			</a>
		)}
	</div>
);

Card.defaultProps = {
	centered: false,
	downloadText: 'Last ned',
	imagePlacement: 'top',
};

Card.propTypes = {
	centered: PropTypes.bool,
	children: PropTypes.node.isRequired,
	downloadText: PropTypes.string,
	fileLocation: PropTypes.string,
	href: PropTypes.string,
	hrefText: PropTypes.string,
	image: PropTypes.element,
	imagePlacement: PropTypes.oneOf(['left', 'top']),
	subTitle: PropTypes.string,
	title: PropTypes.string,
};

export default Card;
