import React from 'react';
import {shallow} from 'enzyme';
import CategoryLink from './index';

describe('CategoryLink component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<CategoryLink href="" titleText="Category link with description" subText="Description goes here" />);
		expect(wrapper).toMatchSnapshot();
	});
});
