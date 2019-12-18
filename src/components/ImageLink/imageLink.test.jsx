import React from 'react';
import { shallow } from 'enzyme';
import ImageLink from './index';
import doge from './doge.png';

describe('ImageLink component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<ImageLink image={<img src={doge} alt="image" />} onClick={() => {}} type="Type" title="Tittel" />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Sets default orientation className', () => {
		const wrapper = shallow(<ImageLink image={<img src={doge} alt="image" />} onClick={() => {}} type="Type" title="Tittel" />);
		expect(wrapper.hasClass('vertical')).toEqual(true);
	});
	test('Switches className on orientation change', () => {
		const wrapper = shallow(<ImageLink orientation="horizontal" image={<img src={doge} alt="image" />} onClick={() => {}} type="Type" title="Tittel" />);
		expect(wrapper.hasClass('horizontal')).toEqual(true);
	});
});
