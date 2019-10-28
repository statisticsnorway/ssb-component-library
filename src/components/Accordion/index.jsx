import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, MinusCircle } from 'react-feather';
import Title from '../Title';

const Accordion = ({
	children, header, openByDefault, primary, subHeader,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`ssb-accordion ${subHeader && 'with-sub-header'}`}>
			<div
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				{!isOpen && <PlusCircle className="expand-icon" size={primary ? 20 : 15} />}
				{isOpen && <MinusCircle className="expand-icon" size={primary ? 20 : 15} />}
				{subHeader && <Title size={5} className="sub-header no-margin">{subHeader}</Title>}
				<Title size={5} className="header-text no-margin">{header}</Title>
			</div>
			<div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{isOpen && children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	openByDefault: false,
	primary: false,
};

Accordion.propTypes = {
	children: PropTypes.node,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	primary: PropTypes.bool,
	subHeader: PropTypes.string,
};

export default Accordion;
