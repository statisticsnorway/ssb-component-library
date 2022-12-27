import React from 'react';
import {shallow} from 'enzyme';
import Card from './index';

jest.mock("../../utils/useId", () => {
	return { useId: () => 1};
});

describe('Card component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Card href="">ProfileBox</Card>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames profiled correctly', () => {
		const wrapper = shallow(<Card href="" profiled>ProfileBox</Card>);
		expect(wrapper.find('.card-content').hasClass('profiled')).toEqual(true);
	});
	test('Toggles classNames image correctly', () => {
		const wrapper = shallow(<Card href="" image={<img src="testImage" alt="testImage" />}>ProfileBox</Card>);
		expect(wrapper.find('div.clickable').containsMatchingElement(<img/>)).toEqual(true);
	});
	test('Show image orientation correctly', () => {
		const wrapper = shallow(<Card href="" image={<img src="testImage" alt="testImage" />} imagePlacement="left">ProfileBox</Card>);
		expect(wrapper.find('div.clickable').hasClass('left-orientation')).toEqual(true);
	});
	test('Show download link if fileLocation', () => {
		const wrapper = shallow(<Card href="" fileLocation="./not_a_file.md" downloadText="Download">ProfileBox</Card>);
		expect(wrapper.find('.download-section').exists()).toEqual(true);
		expect(wrapper.containsMatchingElement(<span>Download</span>)).toEqual(true);
	});
  test('Toggles classNames icon correctly', () => {
    const wrapper = shallow(<Card href="" icon={<i src="testIcon"/>}>ProfileBox</Card>);
    expect(wrapper.find('.card-icon').exists()).toEqual(true);
  });
  test('Render subtitle', () => {
    const wrapper = shallow(<Card href="" subTitle="Subtitle">ProfileBox</Card>);
    expect(wrapper.find('.card-subtitle').render().text()).toBe('Subtitle');
  });
  test('Render title', () => {
    const wrapper = shallow(<Card href="" title="Tittel">ProfileBox</Card>);
    expect(wrapper.find('.card-title').render().text()).toBe('Tittel');
  });
  test('Render hrefText', () => {
    const wrapper = shallow(<Card href="" hrefText="Handling">ProfileBox</Card>);
    expect(wrapper.find('.card-action').find('.href-text').render().text()).toBe('Handling');
  });

});
