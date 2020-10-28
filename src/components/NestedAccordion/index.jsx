import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

const NestedAccordion = ({
	children, className, header, openByDefault,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-nested-accordion${className ? ` ${className}` : ''}`}>
			<button
				className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{!isOpen && <ChevronDown className="expand-icon" size={16} />}
					{isOpen && <ChevronUp className="expand-icon" size={16} />}
					<span className="header-text">{header}</span>
				</span>
			</button>
			<div className={`nested-accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{children}
			</div>
		</div>
	);
};

NestedAccordion.defaultProps = {
	openByDefault: false,
};

NestedAccordion.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
};

export default NestedAccordion;
