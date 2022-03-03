import React from 'react';
import { shallow, mount } from 'enzyme';
import TextArea from './index';
import InputError from '../InputError';

jest.mock('uuid', () => ({ v4: () => 1 }));

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<TextArea rows={5} cols={10}>Input</TextArea>);
		expect(wrapper).toMatchSnapshot();
	});

	test('Renders label if added', () => {
		const wrapper = shallow(<TextArea label="Label" />);
		expect(wrapper.find('label').exists()).toEqual(true);
	});

	test('Adds optional classes to wrapper', () => {
		const wrapper = shallow(<TextArea negative error />);
		expect(wrapper.find('.ssb-text-area').hasClass('negative')).toEqual(true);
		expect(wrapper.find('.ssb-text-area').hasClass('error')).toEqual(true);
	});

	test('handleInputChange', () => {
		const handleChange = jest.fn();
		const wrapper = shallow(<TextArea handleChange={handleChange} />);
		wrapper.find('textarea').simulate('change', {
			target: { value: 'hello' }
		});
		expect(handleChange).toBeCalledWith('hello');
	});

	test('respects rows and cols', () => {
		const wrapper = mount(<TextArea rows={5} cols={25} />);
		const textArea = wrapper.find('textarea');

		expect(textArea.props().rows).toEqual(5);
		expect(textArea.props().cols).toEqual(25);
	});

	test('Renders an error message on error', () => {
		const wrapper = shallow(<TextArea error errorMessage="An error" />);
		expect(wrapper.find(InputError)).toHaveLength(1);
	})

});
