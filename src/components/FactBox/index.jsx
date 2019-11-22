import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../Accordion';

const FactBox = ({
	header, openByDefault, text,
}) => (
	<div className="ssb-fact-box">
		<Accordion header={header} openByDefault={openByDefault} withoutBorders>
			{text}
		</Accordion>
	</div>
);

FactBox.defaultProps = {
	openByDefault: false,
};

FactBox.propTypes = {
	header: PropTypes.string.isRequired,
	openByDefault: PropTypes.bool,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]).isRequired,
};

export default FactBox;
