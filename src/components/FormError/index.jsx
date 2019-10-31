import React from 'react';
import PropTypes from 'prop-types';
import { AlertOctagon } from 'react-feather';

const FormError = ({ className, errorMessages, title }) => (
	<div className={`ssb-form-error ${className ? className : ''}`}>
		<div className="error-icon"><AlertOctagon size={26} /></div>
		<div>
			<span className="error-title">{title}</span>
			<ul>
				{errorMessages.map(error => (
					<li>
						{error}
					</li>
				))}
			</ul>
		</div>
	</div>
);

FormError.defaultProps = {
	negative: false,
};

FormError.propTypes = {
	className: PropTypes.string,
	errorMessages: PropTypes.array.isRequired,
	title: PropTypes.string,
};

export default FormError;
