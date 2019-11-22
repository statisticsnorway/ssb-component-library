import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NestedAccordion = ({
	children, header, openByDefault,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className="ssb-nested-accordion mt-3">
			<button
				className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{!isOpen && <i className="expand-icon feather-chevron-down" />}
					{isOpen && <i className="expand-icon feather-chevron-up" />}
					<span className="header-text">{header}</span>
				</span>
			</button>
			<div className={`nested-accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{isOpen && children}
			</div>
		</div>
	);
};

NestedAccordion.defaultProps = {
	openByDefault: false,
};

NestedAccordion.propTypes = {
	children: PropTypes.node,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
};

export default NestedAccordion;
