import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { BookOpen, XCircle } from 'react-feather';

const Glossary = ({ explanation, children, className, closeText }) => {
	const node = useRef();
	const [open, setOpen] = useState(false);

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	const handleCloseButton = () => {
		setOpen(false);
		node.current.focus();
	};

	const handleKeyDownClose = e => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			setOpen(false);
			node.current.focus();
		}
	};

	const escKeyListener = useCallback(
		e => {
			if (e.keyCode === 27 || e.key === 'Escape') {
				setOpen(false);
				node.current.focus();
			}
		},
		[],
	);

	useEffect(() => {
		if (open) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', escKeyListener, false);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', escKeyListener, false);
		};
	}, [open]);

	return (
		<span className={`ssb-glossary${className ? ` ${className}` : ''}`}>
			<button
				ref={node}
				onClick={() => setOpen(!open)}
				className="glossary-button"
				aria-label={children}
				aria-expanded={open ? 'true' : 'false'}
			>
				<span className="glossary-text-wrap">{children}</span>
				<BookOpen size={12} className="glossary-logo" aria-hidden="true" />
			</button>
			<span className={`glossary-popup${open ? ' open' : ''}`}>
				<span className="content-box d-block">
					<span className="info-text">
						{explanation}
					</span>
					<span className="glossary-closing">
						<button
							onClick={() => { handleCloseButton(); }}
							onKeyDown={e => handleKeyDownClose(e)}
						>
							<XCircle size={16} className="icon" aria-hidden="true" />
							<span>{closeText}</span>
						</button>
					</span>
				</span>
			</span>
		</span>
	);
};

Glossary.defaultProps = {
	closeText: 'Lukk',
};

Glossary.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	closeText: PropTypes.string,
	explanation: PropTypes.string.isRequired,
};

export default Glossary;
