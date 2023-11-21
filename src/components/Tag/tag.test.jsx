import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Tag from './index';

describe('Tag component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Tag>Tag</Tag>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Tag className="mr-4">Tag</Tag>);
		expect(wrapper.find('.ssb-tag').hasClass('mr-4')).toEqual(true);
	});
	test('Renders icon', () => {
		const wrapper = shallow(<Tag icon={<i />}>Tag</Tag>);
		expect(wrapper.find('.ssb-tag').containsMatchingElement(<i />)).toEqual(true);
	});
	test('Sends callback', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Tag onClick={onClick}>Tests</Tag>);
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalled();
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalledTimes(2);
	});
});
