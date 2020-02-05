import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ArrowRightCircle } from 'react-feather';

export function useHover() {
	const [value, setValue] = useState(false);

	const hoverRef = useRef(null);

	useEffect(
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


const ImageLink = ({ image, link, onClick, orientation, title, type }) => {
	const [hoverRef, hovered] = useHover();
	return (
		<a className={`ssb-image-link ${orientation}`} href={link} onClick={onClick} ref={hoverRef}>
			<div className="image-background">{image}</div>
			<span className="il-type">{type}</span>
			<span className="il-title">{title}</span>
			{hovered ? <ArrowRightCircle className="arrow-icon" size={32} /> : <ArrowRight className="arrow-icon" size={32} /> }
		</a>
	);
};

ImageLink.defaultProps = {
	onClick: () => {},
	orientation: 'vertical',
};

ImageLink.propTypes = {
	image: PropTypes.element.isRequired,
	link: PropTypes.string,
	onClick: PropTypes.func,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	title: PropTypes.string,
	type: PropTypes.string,
};

export default ImageLink;
