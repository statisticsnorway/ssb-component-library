import React from 'react';
import {shallow} from 'enzyme';
import Card from './index';

describe('Card component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Card>ProfileBox</Card>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Card centered>ProfileBox</Card>);
		expect(wrapper.find('.card-content').hasClass('centered')).toEqual(true);
	});

});
