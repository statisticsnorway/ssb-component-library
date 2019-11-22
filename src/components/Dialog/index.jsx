import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const Dialog = ({ children, title, type }) => (
	<div className={`ssb-dialog ${type}`}>
		<div className="icon-panel">
			{type === 'warning' && <i className="feather-alert-triangle" />}
			{type === 'info' && <i className="feather-alert-circle" />}
		</div>
		<div className="dialog-content">
			<span className="dialog-title">{title}</span>
			<Paragraph>{children}</Paragraph>
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
