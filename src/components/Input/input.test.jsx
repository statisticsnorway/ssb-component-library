import React from 'react';
import {mount, shallow} from 'enzyme';
import Input from './index';
import InputError from '../InputError';

jest.mock('uuid', () => ({ v4: jest.fn(() => 1) }));

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Input>Input</Input>);
		expect(wrapper).toMatchSnapshot();
	});

	test('Renders label if added', () => {
		const wrapper = shallow(<Input label="Label" />);
		expect(wrapper.find('label').exists()).toEqual(true);
	});

	test('Adds optional classes to wrapper', () => {
		const wrapper = shallow(<Input negative error />);
		expect(wrapper.find('.ssb-input').hasClass('negative')).toEqual(true);
		expect(wrapper.find('.ssb-input').hasClass('error')).toEqual(true);
	});

	test('Type is customizable', () => {
		const wrapper = mount(<Input type="email" />);
		expect(wrapper.find('input').props().type).toEqual('email');
	});

	test('Searchable input renders search icon', () => {
		const wrapper = shallow(<Input ariaLabel="Input field Search" searchField placeholder="Search text" />);
		expect(wrapper.find('button').hasClass('search-icon')).toEqual(true);
	});

	test('handleInputChange', () => {
		const handleChange = jest.fn();
		const wrapper = shallow(<Input handleChange={handleChange} />);
		wrapper.find('input').simulate('change', {
			target: { value: 'hello' }
		});
		expect(handleChange).toBeCalledWith('hello');
	});

	test('handle submit', () => {
		const handleSubmit = jest.fn();
		const wrapper = shallow(<Input searchField submitCallback={handleSubmit} />);
		wrapper.find('.icon-wrapper').simulate('click');
		expect(handleSubmit).toBeCalled();
	});

	test('Renders an error message on error', () => {
		const wrapper = shallow(<Input error errorMessage="An error" />);
		expect(wrapper.find(InputError)).toHaveLength(1);
	})

});
