import React from 'react';
import {shallow} from 'enzyme';
import References from './index';

const referenceList = [
	{
		href: ' ',
		label: 'Link 1',
	}, {
		href: ' ',
		label: 'Link 2',
	}, {
		href: ' ',
		label: 'Link 3',
		plainText: 'A paragraph',
	},
];

describe('References component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<References title="Source" referenceList={referenceList} />);
		expect(wrapper).toMatchSnapshot();
	});
});
