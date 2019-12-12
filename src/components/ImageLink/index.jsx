import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRightCircle } from 'react-feather';

const ImageLink = ({ image, link, onClick, title, type }) => (
	<a className="ssb-image-link" href={link} onClick={onClick}>
		<div className="image-background">{image}</div>
		<span className="il-type">{type}</span>
		<span className="il-title">{title}</span>
		<ArrowRightCircle size={32} />
	</a>
);

ImageLink.defaultProps = {
	onClick: () => {},
};

ImageLink.propTypes = {
	image: PropTypes.element.isRequired,
	link: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
	type: PropTypes.string,
};

export default ImageLink;
