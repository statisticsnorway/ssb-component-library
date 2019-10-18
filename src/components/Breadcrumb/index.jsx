import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link/index.jsx';
import { openSans } from '../../style/mixins';

const Breadcrumb = ({ items, className }) => (
	<BreadcrumbWrapper className={className}>
		{items.map(item => (
			item.link ? (
				<div>
					<Link href={item.link}>{item.text}</Link>
					&nbsp;/&nbsp;
				</div>
			) : (
				<CurrentCrumb>{item.text}</CurrentCrumb>
			)
		))}
	</BreadcrumbWrapper>
);

const BreadcrumbWrapper = styled.div`
    ${openSans};
    display: flex;
    flex-wrap: wrap;
`;

const CurrentCrumb = styled.div`
    ${openSans};
    padding: 2px 2px 1px;
`;

Breadcrumb.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default Breadcrumb;
