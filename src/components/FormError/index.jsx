import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ className, errorMessages, title }) => (
	<div className={`ssb-form-error ${className}`}>
		<span className="error-icon" />
		<div>
			<span className="error-title">{title}</span>
			<ul>
				{errorMessages.map((error, index) => (
					<li key={index}> {/* eslint-disable-line */}
						{error}
					</li>
				))}
			</ul>
		</div>
	</div>
);

FormError.defaultProps = {
	className: '',
	title: '',
};

FormError.propTypes = {
	className: PropTypes.string,
	errorMessages: PropTypes.array.isRequired,
	title: PropTypes.string,
};

export default FormError;
