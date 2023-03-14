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
		<button
			ref={node}
			onClick={() => setOpen(!open)}
			className={`ssb-glossary${className ? ` ${className}` : ''}`}
			aria-label={children}
			aria-expanded={open ? 'true' : 'false'}
		>
			<div className="glossary-text-wrap">{children}</div>
			<BookOpen size={12} className="glossary-logo" aria-hidden="true" />
			<div className={`glossary-popup${open ? ' open' : ''}`}>
				<div className="content-box">
					<span
						className="info-text"
					>
						{explanation}
					</span>
					<div className="ssb-glossary-closing">
						<div
							role="button"
							tabIndex={0}
							onClick={() => {
								handleCloseButton();
							}}
							onKeyDown={e => handleKeyDownClose(e)}
						>
							<XCircle size={16} className="icon" aria-hidden="true" />
							<span>{closeText}</span>
						</div>
					</div>
				</div>
			</div>
		</button>
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
