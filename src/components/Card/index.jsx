import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Download, ExternalLink } from 'react-feather';
import { KEY_ENTER } from '../../utils/keybindings';

const Card = ({
	children, className, external, downloadText, fileLocation, href, hrefText, id, icon, image, imagePlacement, profiled, subTitle, tabIndex, title,
}) => {
	const handleClick = () => {
		window.open(href, external ? '_blank' : '_self');
	};

	const handleKeyboardNav = e => {
		if (e.keyCode === KEY_ENTER) {
			handleClick();
		}
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
					tabIndex={-1}
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
				tabIndex={-1}
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
				tabIndex={-1}
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
				onKeyDown={e => { handleKeyboardNav(e); }}
				tabIndex={tabIndex}
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
						<div>
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
	id: 'ssb-card',
	imagePlacement: 'top',
	profiled: false,
	tabIndex: 0,
};

Card.propTypes = {
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
	tabIndex: PropTypes.number,
	title: PropTypes.string,
};

export default Card;
