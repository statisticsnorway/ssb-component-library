import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Text from '../Text';

const References = ({
	className, referenceList, title,
}) => (
	<div className={`ssb-references${className ? ` ${className}` : ''}`}>
		<span className="reference-header">{title}</span>
		{referenceList.map((ref, index) => (
			<div key={index}> {/* eslint-disable-line */}
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
	className: PropTypes.string,
	referenceList: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			plainText: PropTypes.string,
		}),
	),
	title: PropTypes.string,
};

export default References;
