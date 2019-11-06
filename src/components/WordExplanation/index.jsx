import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileText, XCircle } from 'react-feather';

const WordExplanation = ({
	explanation, children,
}) => {
	const node = useRef();
	const infoContainer = useRef();
	const [open, setOpen] = useState(false);

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
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
		<button ref={node} onClick={() => setOpen(!open)} className="ssb-word-explanation">
			{children}<FileText size="12" />
			<div className="animate-background" />
			{open && (
				<div className={`ssb-we-popup ${open && 'open'}`} ref={infoContainer}>
					<div className="content-box">
						<span className="info-text">{explanation}</span>
						<div className="ssb-we-closing">
							<XCircle size={14} /><span>Lukk</span>
						</div>
					</div>
				</div>
			)}

		</button>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.node,
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
