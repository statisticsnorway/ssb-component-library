import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';

const Accordion = ({
	children, header, openByDefault, subHeader, tabIndex,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-accordion ${subHeader && 'with-sub-header'}`}>
			<button
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{subHeader && <Title size={5} className="sub-header no-margin">{subHeader}</Title>}
					<Title size={5} className="header-text no-margin">{header}</Title>
					{!isOpen && <i className="expand-icon feather-chevron-down" />}
					{isOpen && <i className="expand-icon feather-chevron-up" />}
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
};

export default Accordion;
