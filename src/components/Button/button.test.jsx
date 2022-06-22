import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Button>Button</Button>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Button primary negative>Button</Button>);
		expect(wrapper.find('.ssb-btn').hasClass('negative')).toEqual(true);
		expect(wrapper.find('.ssb-btn').hasClass('primary-btn')).toEqual(true);
	});
	test('Sets aria-label correctly', () => {
		const wrapper = shallow(<Button primary ariaLabel={'test text'}>Button</Button>);
		expect(wrapper.find('.ssb-btn').prop('aria-label')).toEqual('test text');
	});
	test('Renders icon', () => {
		const wrapper = shallow(<Button icon={<i />}>Button</Button>);
		expect(wrapper.find('.ssb-btn').containsMatchingElement(<i />)).toEqual(true);
	});
	test('Sends callback', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Button onClick={onClick}>Tests</Button>);
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalled();
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalledTimes(2);
	});
});
