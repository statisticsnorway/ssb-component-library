import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { BookOpen, XCircle } from 'react-feather';

const Glossary = ({ explanation, children, closeText }) => {
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
		<button ref={node} onClick={() => setOpen(!open)} className="ssb-glossary">
			<div className="glossary-text-wrap">{children}</div>
			<BookOpen size={12} className="glossary-logo" />
			<div className="glossary-animate-background" />
			{open && (
				<div className={`glossary-popup${open ? ' open' : ''}`} ref={infoContainer}>
					<div className="content-box">
						<span className="info-text">{explanation}</span>
						<div className="ssb-glossary-closing">
							<XCircle size={16} className="icon" /><span>{closeText}</span>
						</div>
					</div>
				</div>
			)}

		</button>
	);
};

Glossary.defaultProps = {
	closeText: 'Lukk',
};

Glossary.propTypes = {
	children: PropTypes.node,
	closeText: PropTypes.string,
	explanation: PropTypes.string.isRequired,
};

export default Glossary;
