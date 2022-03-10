import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Download, ExternalLink } from 'react-feather';

function Card({
	children, className, external, downloadText, fileLocation, href, hrefText, icon, image, imagePlacement, profiled, subTitle, title,
}) {
	return (
		<div className={`ssb-card${className ? ` ${className}` : ''}`}>
			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a
				href={href}
				className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
				target={external ? '_blank' : undefined}
				rel={external ? 'noreferrer' : undefined}
			>
				{image && <div className="card-image">{image}</div>}
				<div className={`card-content${image ? ' with-image' : ''}${profiled ? ' profiled' : ''}${external ? ' external' : ''}`}>
					{icon && <div className="card-icon">{icon}</div>}
					{subTitle && <div className="card-subtitle">{subTitle}</div>}
					{title && <div className="card-title">{title}</div>}
					{ children }
					{(!image && !hrefText) && (
						external ? <ExternalLink className="arrow-icon" size={22} /> : <ArrowRight className="arrow-icon" size={22} />
					)}
					{(!image && hrefText) && (
						<div className="card-action">
							{external ? <ExternalLink className="arrow-icon" size={16} /> : <ArrowRight className="arrow-icon" size={16} />}
							<div className="href-text">{hrefText}</div>
						</div>
					)}
				</div>
			</a>
			{fileLocation && (
				<a download href={fileLocation} className="download-section">
					<Download className="download-icon" size={22} />
					<span>{downloadText}</span>
				</a>
			)}
		</div>
	);
}

Card.defaultProps = {
	downloadText: 'Last ned',
	imagePlacement: 'top',
	profiled: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	downloadText: PropTypes.string,
	fileLocation: PropTypes.string,
	href: PropTypes.string.isRequired,
	hrefText: PropTypes.string,
	icon: PropTypes.element,
	image: PropTypes.element,
	imagePlacement: PropTypes.oneOf(['left', 'top']),
	profiled: PropTypes.bool,
	subTitle: PropTypes.string,
	title: PropTypes.string,
	external: PropTypes.bool,
};

export default Card;
