import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown, ChevronUp } from 'react-feather';

const ButtonTertiary = ({
	id, children, className, header, openByDefault, tabIndex, onToggle,
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
			className={`ssb-btn-tertiary${className ? ` ${className}` : ''}`}
		>

			<button
				className={`button-header ${isOpen ? 'open' : 'closed'}`}
				aria-expanded={isOpen ? 'true' : 'false'}
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
			>
				<span className="button-grid">
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

ButtonTertiary.defaultProps = {
	openByDefault: false,
	tabIndex: 0,
	onToggle: () => {},
};

ButtonTertiary.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	tabIndex: PropTypes.number,
	onToggle: PropTypes.func,
};

export default ButtonTertiary;
