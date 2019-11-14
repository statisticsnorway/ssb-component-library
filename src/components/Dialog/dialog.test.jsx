import React from 'react';
import {shallow} from 'enzyme';
import Dialog from './index';

describe('Dialog component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Dialog	title="Dialog Title">Dialog</Dialog>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Change dialog type Toggles classNames correctly', () => {
		const wrapper = shallow(<Dialog	title="Dialog Title" type="warning">Dialog</Dialog>);
		console.log(wrapper.debug())
		expect(wrapper.hasClass('warning')).toEqual(true);
	});
});
