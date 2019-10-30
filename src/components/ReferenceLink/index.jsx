import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Title from '../Title';
import Paragraph from '../Paragraph';

const ReferenceLink = ({
	href, linkText, paragraphText, title,
}) => (
	<div className="ssb-reference-link">
		<Title size={5} className="no-margin">{title}</Title>
		<Paragraph className="no-margin">
			{paragraphText && `${paragraphText} ` }
			<Link href={href}>{linkText}</Link>
		</Paragraph>
	</div>
);

ReferenceLink.defaultProps = {};

ReferenceLink.propTypes = {
	href: PropTypes.string,
	linkText: PropTypes.string,
	paragraphText: PropTypes.string,
	title: PropTypes.string,
};

export default ReferenceLink;
