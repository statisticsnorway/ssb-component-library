import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

const Accordion = ({
	id, children, className, header, openByDefault, subHeader, tabIndex, withoutBorders, onToggle,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	const firstUpdate = useRef(true);
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		onToggle(isOpen);
	}, [isOpen]);
	return (
		<div
			id={id}
			className={`ssb-accordion${subHeader ? ' with-sub-header' : ''}${withoutBorders ? ' without-borders' : ''}${className ? ` ${className}` : ''}`}
		>
			<button
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				aria-expanded={isOpen ? 'true' : 'false'}
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
				{children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	openByDefault: false,
	tabIndex: 0,
	onToggle: () => {},
};

Accordion.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	subHeader: PropTypes.string,
	tabIndex: PropTypes.number,
	withoutBorders: PropTypes.bool,
	onToggle: PropTypes.func,
};

export default Accordion;
