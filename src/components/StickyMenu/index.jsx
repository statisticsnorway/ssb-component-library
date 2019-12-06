import React from 'react';
import PropTypes from 'prop-types';

const StickyMenu = ({
	children,
}) => (
	<div className="ssb-sticky-menu">
		<div className="menu-content">{children}</div>
	</div>
);

StickyMenu.defaultProps = {};

StickyMenu.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StickyMenu;
