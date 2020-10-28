// eslint-disable jsx-props-no-spreading

import React from 'react';
import PropTypes from 'prop-types';
import { TooltipTrigger } from 'react-popper-tooltip';
import { BookOpen, XCircle } from 'react-feather';

const Glossary = ({ children, tooltip, hideArrow, className, explanation, closeText, ...props }) => (
	<div className="ssb-glossary">
		<TooltipTrigger
			{...props}
			tooltip={({
				arrowRef,
				tooltipRef,
				getArrowProps,
				getTooltipProps,
				placement,
			}) => (
				<div
					{...getTooltipProps({
						ref: tooltipRef,
					})}
					className="ssb-glossary-popup"
				>
					{!hideArrow && (
						<div
							{...getArrowProps({
								ref: arrowRef,
								'data-placement': placement,
							})}
						/>
					)}
					<div className="content-box">
						<span className="info-text">{explanation}</span>
					</div>
				</div>
			)}
		>
			{({ getTriggerProps, triggerRef }) => (
				<button
					{...getTriggerProps({
						ref: triggerRef,
					})}
					className="glossary-button"
				>
					<div className="glossary-text-wrap">{children}</div>
					<BookOpen size={12} className="glossary-logo" />
					<div className="glossary-animate-background" />
				</button>
			)}
		</TooltipTrigger>
	</div>
);

Glossary.defaultProps = {
	closeText: 'Lukk',
	placement: 'bottom',
	trigger: 'click',
};

Glossary.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	closeText: PropTypes.string,
	placement: PropTypes.string,
	trigger: PropTypes.string,
	explanation: PropTypes.string.isRequired,
};

export default Glossary;
