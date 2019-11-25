import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'react-feather';

const ProfileBox = ({
	centered, children, fileLocation, onClick,
}) => (
	<div className="ssb-profile-box">
		<button className={`profile-content${centered ? ' centered' : ''}`} onClick={() => onClick}>
			{ children }
		</button>
		{fileLocation && (
			<a download href={fileLocation} className="download-section">
				<Download className="download-icon" />
				<span>Last ned</span>
			</a>
		)}
	</div>
);

ProfileBox.defaultProps = {
	centered: false,
	onClick: () => {},
};

ProfileBox.propTypes = {
	centered: PropTypes.bool,
	children: PropTypes.node.isRequired,
	fileLocation: PropTypes.string,
	onClick: PropTypes.func,
};

export default ProfileBox;
