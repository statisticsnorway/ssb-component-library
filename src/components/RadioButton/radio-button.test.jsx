import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import RadioButton from './index';

describe('RadioButton component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<RadioButton value="item">Item</RadioButton>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Callback is triggered', () => {
		const callback = jest.fn();
		const wrapper = shallow(<RadioButton callback={callback} value="item">Item</RadioButton>);
		wrapper.find('input').simulate('change', { target: { checked: true}});
		expect(callback).toBeCalled();
	})
});
