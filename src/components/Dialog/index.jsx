import React from 'react';
import PropTypes from 'prop-types';
import { AlertCircle, AlertTriangle } from 'react-feather';
import Paragraph from '../Paragraph/index.jsx';

const Dialog = ({children, title, type}) => (
	<div className={`ssb-dialog ${type}`}>
		<div className="icon-panel">
			{type === 'warning' && <AlertTriangle size="36" />}
			{type === 'info' && <AlertCircle size="36" />}
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
