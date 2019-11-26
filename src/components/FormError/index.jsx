import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ className, errorMessages, negative, title }) => (
	<div className={`ssb-form-error${negative ? ' negative' : ''} ${className}`}>
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
	negative: PropTypes.bool,
	title: PropTypes.string,
};

export default FormError;
