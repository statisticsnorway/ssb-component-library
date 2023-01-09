import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown, ChevronUp } from 'react-feather';

const ButtonTertiary = ({
	id, children, className, header, openByDefault, tabIndex, icon, disabled, negative,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);

	return (
		<div
			id={id}
			className={`ssb-btn-tertiary ${negative ? ' negative' : ''} ${className ? ` ${className}` : ''}`}
		>

			<button
				className={`button-header ${isOpen ? 'open' : 'closed'} ${icon ? 'icon' : 'no-icon'}`}
				aria-expanded={isOpen ? 'true' : 'false'}
				tabIndex={tabIndex}
				onClick={() => toggleOpen(!isOpen)}
				disabled={disabled}
				id="accordion-button"
			>
				<span className="button-grid">
					<span className="header-text">{header}</span>
					{
						icon
							? (
								<>
									{!isOpen && <ChevronDown className="expand-icon" size={20} />}
									{isOpen && <ChevronUp className="expand-icon" size={20} />}
								</>
							)
							: null
					}
				</span>
			</button>

			<div className={`accordion-body ${isOpen ? 'open' : 'closed'}`} role="region" aria-labelledby="accordion-button">
				{children}
			</div>
		</div>
	);
};

ButtonTertiary.defaultProps = {
	openByDefault: false,
	tabIndex: 0,
	icon: true,
	disabled: false,
	negative: false,
};

ButtonTertiary.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	tabIndex: PropTypes.number,
	icon: PropTypes.bool,
	disabled: PropTypes.bool,
	negative: PropTypes.bool,
};

export default ButtonTertiary;
