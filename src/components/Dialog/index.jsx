import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle, Info } from 'react-feather';

const Dialog = ({ children, title, type }) => (
	<div className={`ssb-dialog ${type}`}>
		<div className="icon-panel">
			{type === 'warning' && <AlertTriangle size={45} className="icon" />}
			{type === 'info' && <Info size={45} className="icon" />}
		</div>
		<div className="dialog-content">
			<span className="dialog-title">{title}</span>
			<div className="content">{children}</div>
		</div>
	</div>
);

Dialog.defaultProps = {
	type: 'info',
};

Dialog.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf([
		'info',
		'warning',
	]),
};

export default Dialog;
