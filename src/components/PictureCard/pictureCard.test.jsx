import React from 'react';
import { shallow } from 'enzyme';
import PictureCard from './index';
import cardImage from './cards_bilde.jpg';

describe('ImageLink component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(
			<PictureCard imageSrc={cardImage} onClick={() => {}} type="Type" altText="img alt" title="Tittel" />
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('Sets default orientation className', () => {
		const wrapper = shallow(<PictureCard imageSrc={cardImage} altText="alt img" onClick={() => {}} type="Type" title="Tittel" />);
		expect(wrapper.hasClass('vertical')).toEqual(true);
	});
	test('Switches className on orientation change', () => {
		const wrapper = shallow(<PictureCard orientation="horizontal" imageSrc={cardImage} altText="alt img" onClick={() => {}} type="Type" title="Tittel" />);
		expect(wrapper.hasClass('horizontal')).toEqual(true);
	});
});
