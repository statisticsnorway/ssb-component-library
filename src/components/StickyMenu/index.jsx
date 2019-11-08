import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'react-feather';
import Input from '../Input';

const StickyMenu = ({
	ChooseChartLabel, inputHeader, subtitle, title,
}) => (
	<div className="ssb-sticky-menu">
		<div className="content col-5">
			<div>
				<div className="subtitle">{subtitle}</div>
				<div className="title">{title}</div>
			</div>
		</div>
		<div className="content col-5">
			<div className="input-header">{inputHeader}</div>
			<Input ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
		</div>
		<div className="content col-2">
			<div className="choose-chart">{ChooseChartLabel}</div><ChevronDown className="chevron-down-icon" size={18} />
		</div>
	</div>


);

StickyMenu.defaultProps = {};

StickyMenu.propTypes = {
	ChooseChartLabel: PropTypes.string,
	inputHeader: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.string,
};

export default StickyMenu;
