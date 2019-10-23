import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index.jsx';

const Breadcrumb = ({ items, className }) => (
	<div className={`ssb-breadcrumbs ${className || ''}`}>
		{items.map(item => (
			item.link ? (
				<div key={item.text}>
					<Link href={item.link}>{item.text}</Link>
					&nbsp;/&nbsp;
				</div>
			) : (
				<div key={item.text} className="current-page">{item.text}</div>
			)
		))}
	</div>
);

Breadcrumb.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default Breadcrumb;
