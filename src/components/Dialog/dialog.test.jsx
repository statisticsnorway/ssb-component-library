import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Dialog from './index';

describe('Dialog component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Dialog	title="Dialog Title">Dialog</Dialog>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Change dialog type Toggles classNames correctly', () => {
		const wrapper = shallow(<Dialog	title="Dialog Title" type="warning">Dialog</Dialog>);
		expect(wrapper.hasClass('warning')).toEqual(true);
	});
});
