import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown, ChevronUp } from 'react-feather';

const ButtonTertiary = ({
	id, children, className, header, openByDefault, tabIndex, accordion, disabled, negative, onClick,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);

	return (
		<div
			id={id}
			className={`ssb-btn-tertiary ${negative ? ' negative' : ''} ${className ? ` ${className}` : ''}`}
		>
			<button
				className={`button-header ${isOpen ? 'open' : 'closed'} ${accordion ? 'icon' : 'no-icon'}`}
				aria-expanded={isOpen ? 'true' : 'false'}
				tabIndex={tabIndex}
				onClick={accordion ? () => toggleOpen(!isOpen) : onClick}
				disabled={disabled}
				id="accordion-button"
			>
				<span className="button-grid">
					<span className="header-text">{header}</span>
					{accordion && !isOpen && <ChevronDown className="expand-icon" size={20} />}
					{accordion && isOpen && <ChevronUp className="expand-icon" size={20} />}
				</span>
			</button>
			{
				accordion
						&& (
							<div className={`accordion-body ${isOpen ? 'open' : 'closed'}`} role="region" aria-labelledby="accordion-button">
								{children}
							</div>
						)
			}
		</div>
	);
};

ButtonTertiary.defaultProps = {
	openByDefault: false,
	tabIndex: 0,
	accordion: true,
	disabled: false,
	negative: false,
	onClick: () => {},
};

ButtonTertiary.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	tabIndex: PropTypes.number,
	accordion: PropTypes.bool,
	disabled: PropTypes.bool,
	negative: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ButtonTertiary;
