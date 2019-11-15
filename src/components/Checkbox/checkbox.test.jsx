import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './index';
import Pagination from '../Pagination'

describe('Checkbox component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Checkbox value="item">Item</Checkbox>);
		expect(wrapper).toMatchSnapshot();
	});
	//TODO: onchange test
});
