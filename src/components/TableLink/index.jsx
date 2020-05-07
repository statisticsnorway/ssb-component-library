import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'react-feather';

const TableLink = ({
	className, href, hrefText, hrefTitle, isExternal, tabIndex, title,
}) => (
	<div className={`ssb-table-link${className ? ` ${className}` : ''}`}>
		<a href={href} tabIndex={tabIndex} target={isExternal ? '_blank' : undefined} title={hrefTitle}>
			<div className="tl-icon">
				<ArrowRight size={22} />
			</div>
			<div className="tl-title">
				{title}
				<span className="tl-text">
					{hrefText}
				</span>
			</div>
		</a>
	</div>
);

TableLink.defaultProps = {
	isExternal: false,
	title: 'Tabell',
};

TableLink.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	hrefText: PropTypes.string.isRequired,
	hrefTitle: PropTypes.string,
	isExternal: PropTypes.bool,
	tabIndex: PropTypes.number,
	title: PropTypes.string,
};

export default TableLink;
