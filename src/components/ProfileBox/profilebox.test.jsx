import React from 'react';
import {shallow} from 'enzyme';
import ProfileBox from './index';

describe('ProfileBox component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<ProfileBox>ProfileBox</ProfileBox>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<ProfileBox centered>ProfileBox</ProfileBox>);
		expect(wrapper.find('.profile-content').hasClass('centered')).toEqual(true);
	});

});
