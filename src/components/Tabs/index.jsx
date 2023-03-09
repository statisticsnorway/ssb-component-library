import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ activeOnInit, className, items, onClick }) => {
	const [activeItem, changeActive] = useState(activeOnInit);

	const handleClick = e => {
		onClick(e);
		changeActive(e);
	};

	return (
		<div className={`ssb-tabs${className ? ` ${className}` : ''}`} role="tablist">
			{items.map((item, i) => (
				<button
					className={`navigation-item ${activeItem === item.path ? 'active' : ''}`}
					onClick={() => handleClick(item.path)}
					key={item.path}
					role="tab"
					aria-selected={activeItem === item.path}
					aria-controls={`tabpanel-${i}`}
				><span>{item.title}</span>
				</button>
			))}
		</div>
	);
};

Tabs.defaultProps = {
	activeOnInit: '',
	onClick: () => {},
};

Tabs.propTypes = {
	activeOnInit: PropTypes.string,
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		path: PropTypes.string,
	})),
	onClick: PropTypes.func,
};

export default Tabs;
