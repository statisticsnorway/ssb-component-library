import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileText, XCircle } from 'react-feather';

const WordExplanation = ({
	explanation, children,
}) => {
	const node = useRef();
	const infoContainer = useRef();
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	const calculatePosition = (x, y, width) => {
		const topMargin = 30;
		const infoBoxWidth = 270;
		if (open && window.innerWidth <= 768) {
			// Center for mobile devices
			setPosition({ x: (window.innerWidth - infoContainer.current.clientWidth) / 2, y: y + topMargin });
		}
		else {
			if (x + infoBoxWidth > window.innerWidth) {
				// Detect if box will go outside of screen
				const adjustment = x + infoBoxWidth - window.innerWidth;
				setPosition({ x: x - adjustment, y: y + topMargin });
			} else {
				const adjustment = (infoBoxWidth / 2) - (width / 2);
				setPosition({ x: x - adjustment, y: y + topMargin });
			}
		}
	};

	useEffect(() => {
		calculatePosition(node.current.offsetLeft, node.current.offsetTop, node.current.offsetWidth);
		if (open) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [open]);

	return (
		<span ref={node} onClick={() => setOpen(!open)} className="ssb-word-explanation">
			{children}<FileText size="12" />
			<div className="animate-background" />
			{open && (
				<div className="ssb-we-popup" ref={infoContainer} style={{ top: position.y, left: position.x }}>
					<div className="ssb-we-arrow">
						<svg width="16" height="16">
							<rect width="16" height="16" rotate="45deg" />
						</svg>
					</div>
					<div className="content-box">
						<span className="info-text">{explanation}</span>
						<div className="ssb-we-closing">
							<XCircle size={14} /><span>Lukk</span>
						</div>
					</div>
				</div>
			)}
		</span>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.node,
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
