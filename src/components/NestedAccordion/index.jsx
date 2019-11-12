import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

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
					{!isOpen && <ChevronDown className="expand-icon" size="15" />}
					{isOpen && <ChevronUp className="expand-icon" size="15" />}
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
