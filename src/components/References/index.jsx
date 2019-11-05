import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Text from '../Text';
import Title from '../Title';

const References = ({
	referenceList, title,
}) => (
	<div className="ssb-references">
		<Title size={5} className="no-margin">{title}</Title>
		{referenceList.map(ref => (
			<div>
				{ref.plainText && <Text className="no-margin">{ref.plainText}&nbsp;</Text>}
				<Link href={ref.href}>{ref.label}</Link><br />
			</div>
		))}
	</div>
);

References.defaultProps = {
	title: 'Kilder',
};

References.propTypes = {
	referenceList: PropTypes.arrayOf({
		href: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		plainText: PropTypes.string,
	}),
	title: PropTypes.string,
};

export default References;
