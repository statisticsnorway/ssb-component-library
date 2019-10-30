import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Paragraph from '../Paragraph';

const ProfileBox = ({
	link, text, title,
}) => (
	<div className="ssb-profile-box">
		<Link href={link} linkType="header">{title}</Link>
		<Paragraph>{text}</Paragraph>
	</div>
);

ProfileBox.defaultProps = {};

ProfileBox.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default ProfileBox;
