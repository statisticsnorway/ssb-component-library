import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, MinusCircle } from 'react-feather';
import Title from '../Title';

const Accordion = ({
	children, header, openByDefault, primary, subHeader, tabIndex,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-accordion ${subHeader && 'with-sub-header'}`}>
			<button
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				role="button"
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
					{!isOpen && <PlusCircle className="expand-icon" size={primary ? 20 : 15} />}
					{isOpen && <MinusCircle className="expand-icon" size={primary ? 20 : 15} />}
					{subHeader && <Title size={5} className="sub-header no-margin">{subHeader}</Title>}
					<Title size={5} className="header-text no-margin">{header}</Title>
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
	primary: false,
	tabIndex: 0,
};

Accordion.propTypes = {
	children: PropTypes.node,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	primary: PropTypes.bool,
	subHeader: PropTypes.string,
	tabIndex: PropTypes.number,
};

export default Accordion;
