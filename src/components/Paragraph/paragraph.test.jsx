import React from 'react';
import {shallow} from 'enzyme';
import Paragraph from './index';

describe('Paragraph component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Paragraph>Paragraph</Paragraph>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Paragraph className="mt-3" negative>Paragraph</Paragraph>);
		expect(wrapper.hasClass('mt-3')).toEqual(true);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
