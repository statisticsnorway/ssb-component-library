import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRightCircle } from 'react-feather';

const ImageLink = ({ image, link, onClick, orientation, title, type }) => (
	<a className= {`ssb-image-link ${orientation}`} href={link} onClick={onClick}>
		<div className="image-background">{image}</div>
		<span className="il-type">{type}</span>
		<span className="il-title">{title}</span>
		<ArrowRightCircle size={32} />
	</a>
);

ImageLink.defaultProps = {
	onClick: () => {},
	orientation: 'vertical'
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
