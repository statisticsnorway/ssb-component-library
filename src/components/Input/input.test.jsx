import React from 'react';
import {shallow} from 'enzyme';
import Input from './index';

jest.mock('uuid/v4', () => jest.fn(() => 1));

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Input>Input</Input>);
		expect(wrapper).toMatchSnapshot();
	});
	test('searchable input renders search icon', () => {
		const wrapper = shallow(<Input ariaLabel="Input field Search" searchField placeholder="Search text" />);
		expect(wrapper.find('button').hasClass('search-icon')).toEqual(true);
	});
});
