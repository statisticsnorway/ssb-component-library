import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

const Accordion = ({
	children, className, header, openByDefault, subHeader, tabIndex, withoutBorders,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-accordion${subHeader ? ' with-sub-header' : ''}${withoutBorders ? ' without-borders' : ''}${className ? ` ${className}` : ''}`}>
			<button
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{subHeader && <span className="sub-header">{subHeader}</span>}
					<span className="header-text">{header}</span>
					{!isOpen && <ChevronDown className="expand-icon" size={20} />}
					{isOpen && <ChevronUp className="expand-icon" size={20} />}
				</span>
			</button>
			<div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{isOpen && children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	openByDefault: false,
	tabIndex: 0,
};

Accordion.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	subHeader: PropTypes.string,
	tabIndex: PropTypes.number,
	withoutBorders: PropTypes.bool,
};

export default Accordion;
