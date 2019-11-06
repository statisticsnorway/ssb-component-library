import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const StickyMenu = ({
	subtitle, title,
}) => (
	<div className="ssb-sticky-menu">
		<div className="container">
			<div className="sm-left col-md-6 col-lg-8">
				<div className="sm-left-content">
					<div className="sm-subtitle">{subtitle}</div>
					<div className="sm-title">{title}</div>
				</div>
			</div>
			<div className="sm-right col-md-6 col-lg-4">
				<div className="sm-searchbar-header">Bytt kommune:</div>
				<div className="sm-searchbar">
					<Input id="search" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
				</div>
			</div>
		</div>
	</div>
);

StickyMenu.defaultProps = {};

StickyMenu.propTypes = {
	subtitle: PropTypes.string,
	title: PropTypes.string,
};

export default StickyMenu;
