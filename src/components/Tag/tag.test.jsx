import React from 'react';
import {shallow} from 'enzyme';
import Tag from './index';

describe('Tag component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Tag>Tag</Tag>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Renders icon', () => {
		const wrapper = shallow(<Tag icon={<i />}>Tag</Tag>);
		expect(wrapper.find('.ssb-tag').containsMatchingElement(<i />)).toEqual(true);
	});
	test('Sends callback', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Tag onClick={onClick}>Tests</Tag>);
		wrapper.find('.ssb-tag').simulate('click');
		expect(onClick).toBeCalled();
		wrapper.find('.ssb-tag').simulate('click');
		expect(onClick).toBeCalledTimes(2);
	});
});
