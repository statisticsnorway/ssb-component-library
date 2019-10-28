import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const Breadcrumb = ({ items }) => (
	<div className="ssb-breadcrumbs">
		{items.map(item => (
			item.link ? (
				<div key={item.text}>
					<Link href={item.link}>{item.text}</Link>
					&nbsp;/&nbsp;
				</div>
			) : (
				<span key={item.text}>{item.text}</span>
			)
		))}
	</div>
);

Breadcrumb.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default Breadcrumb;
