import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus, Minus } from 'react-feather';

const NestedAccordion = ({
	children, header, openByDefault,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-nested-accordion mt-3`}>
			<div
				className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				{!isOpen && <Plus className="expand-icon" size="10" />}
				{isOpen && <Minus className="expand-icon" size="10" />}
				<span className="header-text">{header}</span>
			</div>
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
