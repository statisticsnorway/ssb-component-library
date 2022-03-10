import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ArrowRightCircle } from 'react-feather';

export function useHover() {
	const [value, setValue] = useState(false);

	const hoverRef = useRef(null);

	useEffect(
		// eslint-disable-next-line consistent-return
		() => {
			const handleMouseOver = () => setValue(true);
			const handleMouseOut = () => setValue(false);
			const element = hoverRef && hoverRef.current;

			if (element) {
				element.addEventListener('mouseover', handleMouseOver);
				element.addEventListener('mouseout', handleMouseOut);
				return () => {
					element.removeEventListener('mouseover', handleMouseOver);
					element.removeEventListener('mouseout', handleMouseOut);
				};
			}
		},
		[hoverRef],
	);

	return [hoverRef, value];
}

const PictureCard = ({ className, imageSrc, altText, link, onClick, orientation, title, type }) => {
	const [hoverRef, hovered] = useHover();
	return (
		<a
			className={`ssb-picture-card ${orientation} ${className || ''}`}
			href={link}
			onClick={onClick}
			ref={hoverRef}
		>
			<div className="image-background">
				<img src={imageSrc} alt={altText} />
			</div>
			<div className="overlay">
				<span className="il-type">{type}</span>
				<span className="il-title">{title}</span>
				{hovered
					? <ArrowRightCircle className="arrow-icon" size={32} />
					: <ArrowRight className="arrow-icon" size={32} />}
			</div>
		</a>
	);
};

PictureCard.defaultProps = {
	onClick: () => {
	},
	orientation: 'vertical',
};

PictureCard.propTypes = {
	className: PropTypes.string,
	imageSrc: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	link: PropTypes.string,
	onClick: PropTypes.func,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	title: PropTypes.string,
	type: PropTypes.string,
};

export default PictureCard;
