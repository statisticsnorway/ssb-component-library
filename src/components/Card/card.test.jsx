import React from 'react';
import {shallow} from 'enzyme';
import Card from './index';

describe('Card component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Card>ProfileBox</Card>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames centered correctly', () => {
		const wrapper = shallow(<Card centered>ProfileBox</Card>);
		expect(wrapper.find('.card-content').hasClass('centered')).toEqual(true);
	});
	test('Toggles classNames image correctly', () => {
		const wrapper = shallow(<Card image={<img src="testImage" alt="testImage" />}>ProfileBox</Card>);
		expect(wrapper.find('button').containsMatchingElement(<img/>)).toEqual(true);
	});
	test('Show image orientation correctly', () => {
		const wrapper = shallow(<Card imagePlacement="left">ProfileBox</Card>);
		expect(wrapper.find('button').hasClass('left-orientation')).toEqual(true);
	});
	test('Show download link if fileLocation', () => {
		const wrapper = shallow(<Card fileLocation="./not_a_file.md" downloadText="Download">ProfileBox</Card>);
		expect(wrapper.find('a').hasClass('download-section')).toEqual(true);
		expect(wrapper.containsMatchingElement(<span>Download</span>)).toEqual(true);
	});

});
