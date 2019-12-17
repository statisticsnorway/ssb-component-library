import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import { BookOpen, XCircle } from 'react-feather';

const Glossary = ({ explanation, children }) => {
	const node = useRef();
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
		<div className="ssb-glossary">
			<Manager>
				<button ref={node} onClick={() => setOpen(!open)} className="glossary-button">
					<Reference>
						{({ ref }) => (
							<div ref={ref}>
								<div className="glossary-text-wrap">{children}</div>
								<BookOpen size={12} className="glossary-logo" />
								<div className="glossary-animate-background" />
							</div>
						)}
					</Reference>
				</button>
				{open && (
					<Popper placement="bottom" modifiers={{ preventOverflow: { escapeWithReference: false } }}>
						{({ ref, style, placement, outOfBoundaries }) => (
							<div
								className={`glossary-popup${open ? ' open' : ''}`}
								ref={ref}
								style={{ opacity: outOfBoundaries ? 0 : 1, ...style }}
								data-placement={placement}
							>
								<div className="content-box">
									<span className="info-text">{explanation}</span>
									<div className="ssb-glossary-closing">
										<XCircle size={16} className="icon" /><span>Lukk</span>
									</div>
								</div>
							</div>
						)}

					</Popper>
				)}
			</Manager>
		</div>
	);
};

Glossary.defaultProps = {};

Glossary.propTypes = {
	children: PropTypes.node,
	explanation: PropTypes.string.isRequired,
};

export default Glossary;
