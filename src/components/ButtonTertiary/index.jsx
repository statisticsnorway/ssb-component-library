import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown, ChevronUp } from 'react-feather';

const ButtonTertiary = ({
	id, children, className, header, openByDefault, tabIndex, accordion, disabled, negative, onClick,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	const classNames = `ssb-btn-tertiary${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`;

	return (
		<div
			id={id}
			className={classNames.replace(/\s\s+/g, ' ').trim()}
		>
			<button
				className={`button-header ${isOpen ? 'open' : 'closed'} ${accordion ? 'icon' : 'no-icon'}`}
				aria-expanded={isOpen ? 'true' : 'false'}
				tabIndex={tabIndex}
				onClick={accordion ? () => toggleOpen(!isOpen) : onClick}
				disabled={disabled}
				id={`accordion-button-${id}`}
				aria-controls={accordion && 'accordion-section'}
				aria-disabled={disabled && 'true'}
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
							<div id="accordion-section" className={`accordion-body ${isOpen ? 'open' : 'closed'}`} role="region" aria-labelledby={`accordion-button-${id}`}>
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
