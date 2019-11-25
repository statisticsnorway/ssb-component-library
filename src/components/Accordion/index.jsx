import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';
import Title from '../Title';

const Accordion = ({
	children, header, openByDefault, subHeader, tabIndex, withoutBorders,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-accordion${subHeader ? ' with-sub-header' : ''}${withoutBorders ? ' without-borders' : ''}`}>
			<button
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{subHeader && <Title size={5} className="sub-header no-margin">{subHeader}</Title>}
					<Title size={5} className="header-text no-margin">{header}</Title>
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
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	subHeader: PropTypes.string,
	tabIndex: PropTypes.number,
	withoutBorders: PropTypes.bool,
};

export default Accordion;
