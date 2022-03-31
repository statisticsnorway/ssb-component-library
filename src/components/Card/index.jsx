import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Download, ExternalLink } from 'react-feather';

const Card = ({
	children, className, external, downloadText, fileLocation, href, hrefText, id, icon, image, imagePlacement, profiled, subTitle, title,
}) => {
	const handleClick = e => {
		window.open(href, external ? '_blank' : '_self');
	};

	function renderLink() {
		if (external) {
			return (
				<a
					className={hrefText ? 'href-text' : undefined}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={!hrefText ? (title || '') : undefined}
					aria-describedby={subTitle ? `subtitle_${id}` : undefined}
				>
					{hrefText || null}
				</a>
			);
		}
		return (
			<a
				className={hrefText ? 'href-text' : undefined}
				href={href}
				aria-label={!hrefText ? (title || '') : undefined}
				aria-describedby={subTitle ? `subtitle_${id}` : undefined}
			>
				{hrefText || null}
			</a>
		);
	}

	function renderLinkEditorialCard() {
		return (
			<a
				className="card-title"
				href={href}
				aria-describedby={subTitle ? `subtitle_${id}` : undefined}
			>
				{title}
			</a>
		);
	}

	return (
		<div className={`ssb-card${className ? ` ${className}` : ''}`}>
			<div
				className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
				onClick={() => handleClick()}
			>
				{image && <div className="card-image">{image}</div>}
				<div
					className={`card-content${image ? ' with-image' : ''}${profiled ? ' profiled' : ''}${external ? ' external' : ''}`}
				>
					{icon && <div className="card-icon">{icon}</div>}
					{subTitle && <div id={`subtitle_${id}`} aria-hidden="true" className="card-subtitle">{subTitle}</div>}
					{(image && title) && renderLinkEditorialCard()}
					{(!image && title) && <div className="card-title">{title}</div>}
					{children}
					{(!image && !hrefText) && (
						<div className="card-action">
							{external ? <ExternalLink className="arrow-icon" size={22} aria-hidden="true" />
								: <ArrowRight className="arrow-icon" size={22} aria-hidden="true" />}
							{renderLink()}
						</div>
					)}

					{(!image && hrefText) && (
						<div className="card-action">
							{external ? <ExternalLink className="arrow-icon" size={22} aria-hidden="true" />
								: <ArrowRight className="arrow-icon" size={22} aria-hidden="true" />}
							{renderLink()}
						</div>
					)}
				</div>
			</div>
			{fileLocation && (
				<a download href={fileLocation} className="download-section">
					<Download className="download-icon" size={22} />
					<span>{downloadText}</span>
				</a>
			)}
		</div>
	);
};

Card.defaultProps = {
	downloadText: 'Last ned',
	imagePlacement: 'top',
	profiled: false,
	id: 'ssb-card',
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
	id: PropTypes.string,
};

export default Card;
