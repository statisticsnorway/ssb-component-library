/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Download, ExternalLink } from 'react-feather';
import { useId } from '../../utils/useId';

const Card = ({
	ariaDescribedBy, ariaLabel, children, className, external, downloadText, fileLocation, href, hrefText, id, icon, image, imagePlacement, profiled, subTitle, title,
}) => {
	const cardId = id || useId();

	const openLink = () => {
		const link = document.createElement('a');
		link.href = href;
		if (external) {
			link.target = '_blank';
			link.rel = 'noreferrer';
		}
		link.click();
	};

	return (
		<div className={`ssb-card${className ? ` ${className}` : ''}`}>
			<div
				className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
				onClick={() => openLink()}
				role="link"
				tabIndex={0}
				aria-label={!ariaLabel ? title : ariaLabel}
				aria-describedby={ariaDescribedBy ? `${cardId}-${ariaDescribedBy}` : undefined}
			>

				{image && <div className="card-image">{image}</div>}

				<div className={`card-content${image ? ' with-image' : ''}${profiled ? ' profiled' : ''}${external ? ' external' : ''}`}>

					{icon && <div className="card-icon">{icon}</div>}
					{subTitle && <div id={`${cardId}-subtitle`} className="card-subtitle">{subTitle}</div>}
					{title && (
						<a
							href={href}
							className="card-title"
							target={external ? '_blank' : undefined}
							rel={external ? 'noreferrer' : undefined}
						>{title}
						</a>
					)}

					{ children && <div id={`${cardId}-text`} className="card-text">{children}</div> }

					{(!image && !hrefText) && (
						<a
							href={href}
							target={external ? '_blank' : undefined}
							rel={external ? 'noreferrer' : undefined}
						>
							{external ? <ExternalLink className="arrow-icon" size={22} /> : <ArrowRight className="arrow-icon" size={22} />}
						</a>
					)}

					{(!image && hrefText) && (
						<a
							className="card-action"
							href={href}
							target={external ? '_blank' : undefined}
							rel={external ? 'noreferrer' : undefined}
							aria-label={!title ? hrefText : undefined}
							aria-describedby={!title ? `${cardId}-${ariaDescribedBy}` : undefined}
						>
							{external ? <ExternalLink className="arrow-icon" size={16} /> : <ArrowRight className="arrow-icon" size={16} />}
							<div className="href-text">{hrefText}</div>
						</a>
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
};

Card.propTypes = {
	ariaDescribedBy: PropTypes.oneOf(['subtitle', 'text']),
	ariaLabel: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	downloadText: PropTypes.string,
	external: PropTypes.bool,
	fileLocation: PropTypes.string,
	href: PropTypes.string.isRequired,
	hrefText: PropTypes.string,
	icon: PropTypes.element,
	id: PropTypes.string,
	image: PropTypes.element,
	imagePlacement: PropTypes.oneOf(['left', 'top']),
	profiled: PropTypes.bool,
	subTitle: PropTypes.string,
	title: PropTypes.string,
};

export default Card;
